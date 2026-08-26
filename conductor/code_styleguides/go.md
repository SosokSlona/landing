# Go Style Guide

## General Principles
- Adhere strictly to `gofmt` and standard Go conventions (`Effective Go`).
- Prefer simple, explicit code over complex abstractions.
- Handle errors explicitly; do not ignore returned errors.
- Minimize memory allocations in hot paths using `sync.Pool` and pre-sized slices.
- Use context propagation (`context.Context`) for all I/O and cancellation-aware routines.
