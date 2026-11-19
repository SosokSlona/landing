#!/usr/bin/env python3
"""
Скрипт добавления выполненной работы и отзыва в shahotko.tech
Копирует фото в assets/works/, обновляет assets/works.json и синхронизирует index.html.

Использование:
  python3 add_work.py
  (интерактивный режим)

  или с аргументами:
  python3 add_work.py --title "Название" --category "B2B / AI" --desc "Описание..." \
                      --image "/path/to/photo.jpg" --author "Иван И." --review "Текст отзыва..."
"""

import os
import sys
import json
import shutil
import re
import argparse

ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
WORKS_JSON_PATH = os.path.join(ROOT_DIR, "assets", "works.json")
WORKS_DIR = os.path.join(ROOT_DIR, "assets", "works")
INDEX_HTML_PATH = os.path.join(ROOT_DIR, "index.html")

def slugify(text):
    text = text.lower()
    translit = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e',
        'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm',
        'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
        'ф': 'f', 'х': 'h', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'sch', 'ъ': '',
        'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya'
    }
    res = []
    for c in text:
        if c in translit:
            res.append(translit[c])
        elif c.isalnum():
            res.append(c)
        elif c in [' ', '-', '_']:
            res.append('-')
    slug = ''.join(res)
    slug = re.sub(r'-+', '-', slug).strip('-')
    return slug[:40] if slug else "work"

def generate_html_cards(works):
    cards_html = []
    for w in works:
        img_src = w.get("image", "")
        title = w.get("title", "")
        category = w.get("category", "")
        desc = w.get("description", "")
        review = w.get("review", {})
        author = review.get("author", "")
        loc = review.get("location", "Минск")
        r_text = review.get("text", "")

        author_line = f"{author} ({loc})" if loc else author

        img_tag = ""
        if img_src:
            img_tag = f'<div class="work-card-media"><img src="{img_src}" alt="{title}" loading="lazy" width="400" height="220"></div>'

        card = f'''          <article class="work-card">
{img_tag}
            <div class="work-card-body">
              <span class="badge badge-teal">{category}</span>
              <h3 class="work-card-title">{title}</h3>
              <p class="work-card-desc">{desc}</p>
              <blockquote class="work-review">
                <p>«{r_text}»</p>
                <cite>— {author_line}</cite>
              </blockquote>
            </div>
          </article>'''
        cards_html.append(card)
    return "\n".join(cards_html)

def sync_index_html(works):
    if not os.path.exists(INDEX_HTML_PATH):
        return
    with open(INDEX_HTML_PATH, "r", encoding="utf-8") as f:
        html = f.read()

    cards_markup = generate_html_cards(works)
    pattern = r'(<!-- WORKS_LIST_START -->)(.*?)(<!-- WORKS_LIST_END -->)'
    if re.search(pattern, html, re.DOTALL):
        new_html = re.sub(pattern, rf'\1\n{cards_markup}\n          \3', html, flags=re.DOTALL)
        with open(INDEX_HTML_PATH, "w", encoding="utf-8") as f:
            f.write(new_html)
        print("Синхронизирована секция в index.html!")

def main():
    parser = argparse.ArgumentParser(description="Добавление работы в assets/works.json")
    parser.add_argument("--title", help="Название работы")
    parser.add_argument("--category", help="Категория (B2B / AI, B2B / Сети, B2C / Сервис)")
    parser.add_argument("--desc", help="Описание выполненной работы")
    parser.add_argument("--image", help="Путь к исходному файлу фото")
    parser.add_argument("--author", help="Имя или должность автора отзыва")
    parser.add_argument("--location", default="Минск", help="Город автора отзыва")
    parser.add_argument("--review", help="Текст отзыва клиента")
    args = parser.parse_args()

    os.makedirs(WORKS_DIR, exist_ok=True)

    # Загружаем существующий JSON
    if os.path.exists(WORKS_JSON_PATH):
        with open(WORKS_JSON_PATH, "r", encoding="utf-8") as f:
            try:
                works = json.load(f)
            except Exception:
                works = []
    else:
        works = []

    # Если аргументы не переданы, запрашиваем интерактивно
    title = args.title or input("Название работы: ").strip()
    category = args.category or input("Категория (напр. B2B / AI & Автоматизация): ").strip()
    desc = args.desc or input("Описание работы: ").strip()
    image_input = args.image or input("Путь к фото/картинке (можно Enter для пропуска): ").strip()
    author = args.author or input("Имя клиента / должность: ").strip()
    loc = args.location or input("Город [Минск]: ").strip() or "Минск"
    review_text = args.review or input("Текст отзыва: ").strip()

    if not title or not desc:
        print("Ошибка: название и описание обязательны!")
        sys.exit(1)

    work_id = f"work-{len(works) + 1}-{slugify(title)}"

    # Копирование фото
    image_rel_path = ""
    if image_input and os.path.exists(image_input):
        ext = os.path.splitext(image_input)[1].lower() or ".jpg"
        target_filename = f"{work_id}{ext}"
        target_path = os.path.join(WORKS_DIR, target_filename)
        shutil.copy2(image_input, target_path)
        image_rel_path = f"/assets/works/{target_filename}"
        print(f"Изображение скопировано в: {image_rel_path}")
    elif image_input:
        print(f"Предупреждение: файл {image_input} не найден, работа добавлена без фото.")

    new_item = {
        "id": work_id,
        "title": title,
        "category": category,
        "description": desc,
        "image": image_rel_path,
        "review": {
            "author": author,
            "location": loc,
            "text": review_text
        }
    }

    works.append(new_item)

    with open(WORKS_JSON_PATH, "w", encoding="utf-8") as f:
        json.dump(works, f, ensure_ascii=False, indent=2)
    print(f"Запись успешно сохранена в {WORKS_JSON_PATH} (всего работ: {len(works)})")

    # Синхронизация index.html
    sync_index_html(works)

if __name__ == "__main__":
    main()
