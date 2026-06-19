# Submission Note

I structured the project as separate frontend and backend folders for clarity. The React frontend uses small, single-responsibility components (Hero, WorkshopDetails, LearningOutcomes, FAQ, RegistrationForm) driven by one shared data file, so content updates don't require touching layout code. Tailwind CSS handled styling with a custom color and font theme to match a distinct, non-generic visual identity rather than default templates. The form includes client-side validation, loading and success/error states, and calls a real Express API. The backend validates input both at the route/controller level and via Mongoose schema rules, and gracefully degrades to console-logging if no MongoDB URI is configured, so reviewers can run it without setting up a database.

With more time, I'd add automated tests (Jest/RTL for components, Supertest for the API), rate-limiting on the enquiry endpoint, an admin view of submissions, and TypeScript across both layers.
