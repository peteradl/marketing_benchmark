# ADL Marketing Benchmark Dashboard

A static, Vercel-ready dashboard for the LinkedIn IC Engagement Benchmark.

## Deploy

1. Import peteradl/marketing_benchmark into Vercel.
2. Keep the framework preset as Other.
3. Leave the build command empty and the output directory as the repository root.
4. Deploy.

The dashboard has no runtime dependencies. It reads the current pilot snapshot from app.js.

## Local preview

Run python -m http.server 4173 and open http://localhost:4173.

## Benchmark source

- Repository source: benchmarks/linkedin-ic-engagement-v0.1.md
Version 0.1 is the working method. Numeric targets remain pilot targets, and partial coverage blocks publication of numeric results.
