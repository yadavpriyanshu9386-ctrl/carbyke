# Contributing

## Branching
- `main`: stable, protected
- `develop`: integration branch
- `feature/<module>-<short-name>` e.g. `feature/health-score-engine`
- `fix/<short-name>`

## Workflow
1. Pick an issue and mention its requirement ID (FR-xxx).
2. Branch from `develop`.
3. Commit small, clear messages: `health_score: add document weight`
4. Open a PR to `develop`; at least one teammate reviews.
5. Never commit `.env` or secrets.

## Code style
- Python: black + flake8. JavaScript/React: prettier (format on save in VS Code).
