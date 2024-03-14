
# my-home-server


┌───────────────────────────────────────────────────────────────────────────┐
│                                  LuxuryHome                               │
├───────────────────────────────┬───────────────────────────────────────────┤
│ id                            │ Int                                       │
│ title                         │ String                                    │
│ description                   │ String                                    │
│ price                         │ Decimal                                   │
│ address                       │ String                                    │
│ city                          │ String                                    │
│ country                       │ String                                    │
│ homeType                      │ HomeType                                  │
│ bedrooms                      │ Int                                       │
│ bathrooms                     │ Int                                       │
│ hasGarden                     │ Boolean                                   │
│ hasGarage                     │ Boolean                                   │
│ sqftArea                      │ Int                                       │
│ yearBuilt                     │ Int                                       │
│ imageUrl                      │ String                                    │
│ createdAt                     │ DateTime                                  │
│ updatedAt                     │ DateTime                                  │
└───────────────────────────────┴───────────────────────────────────────────┘
                                    ┌───────────────────────┐
                                    │                       │
                                    │                       │
                                    │        One to Many    │
                                    │                       │
                                    │                       │
                                    └───────────────────────┘
┌───────────────────────────────────────────────────────────────────────────┐
│                                   User                                    │
├───────────────────────────────┬───────────────────────────────────────────┤
│ id                            │ Int                                       │
│ fullName                      │ String                                    │
│ email                         │ String (Unique)                           │
│ location                      │ String                                    │
│ password                      │ String                                    │
│ role                          │ Role (Default: ADMIN)                     │
│ createdAt                     │ DateTime                                  │
│ updatedAt                     │ DateTime                                  │
└───────────────────────────────┴───────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│                                  Enums                                    │
├───────────────────────────────────────────┬───────────────────────────────┤
│ HomeType                                  │ APARTMENT, HOUSE, VILLA,      │
│                                           │ PENTHOUSE, BUNGALOW, MANSION  │
│ Role                                      │ ADMIN                         │
└───────────────────────────────────────────┴───────────────────────────────┘