# React Day 1 — Component Architecture + State

## Component Thinking
- Component = responsibility (not just UI)
- Avoid useless wrappers
- Each component should have a clear purpose

## State Placement
- Ask: "Who needs this data?"
- Shared → move to parent (App)
- Local → keep inside component

## Examples
- notes → App
- searchQuery → App
- form inputs → local (NoteInputForm)

## Key Rule
State owner = logic owner
Children trigger actions via props