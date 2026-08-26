# SQL & Database Style Guide

## General Principles
- Write explicit, capitalized SQL keywords (`SELECT`, `INSERT`, `WHERE`, `JOIN`).
- Define explicit primary keys, indexes, and partitioning keys.
- For ClickHouse: use appropriate engines (`ReplacingMergeTree`) and codecs (`ZSTD`, `DoubleDelta`).
- For PostgreSQL: use vector indexes (`HNSW`) and full-text indexes (`GIN` on `tsvector`).
