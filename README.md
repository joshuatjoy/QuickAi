# QuickAI

QuickAI is a comprehensive AI-powered platform designed to streamline various creative and analytical tasks. From generating engaging content to transforming images, QuickAI leverages the power of artificial intelligence to boost your productivity.

## Live Demo

Experience QuickAI in action: [https://quickai-sage.vercel.app/](https://quickai-sage.vercel.app/)

## Features

QuickAI offers a wide range of AI tools to assist you:

* **AI Title Generator:** Generate creative blog titles based on keywords and categories.
    * *Categories include:* General, Technology, Business, Health, Lifestyle, Education, Travel, Food.
    * **Backend Details:** Uses Gemini-2.0-flash model with a maximum of 100 tokens. Free users have a limit of 10 creations.
* **AI Article Writer:** Produce articles of varying lengths on any topic.
    * *Lengths:* Short (500-800 words), Medium (800-1200 words), Long (1200+ words).
    * **Backend Details:** Utilizes Gemini-2.0-flash model with `max_tokens` set based on the selected length. Free users have a limit of 10 creations.
* **AI Image Generator:** Create unique images from text descriptions with various artistic styles. You can also choose to make images public for the community.
    * *Styles include:* Realistic, Ghibli style, Anime style, Cartoon style, Fantasy style, 3D style, Portrait style.
    * **Backend Details:** Integrates with the ClipDrop API for image generation and Cloudinary for image hosting. This feature is exclusive to premium users.
* **Image Background Removal:** Easily remove backgrounds from your images.
    * *Supports:* JPG, PNG, and other image formats.
    * **Backend Details:** Leverages Cloudinary's background removal transformation. This feature is exclusive to premium users.
* **Object Removal from Image:** Remove specific objects from your images by describing them.
    * *Note:* Currently supports removal of a single object at a time.
    * **Backend Details:** Uses Cloudinary's generative remove effect for object removal. This feature is exclusive to premium users.
* **Resume Reviewer:** Get an AI-powered analysis of your resume to help you improve it.
    * *Supports:* PDF resumes only.
    * **Backend Details:** Processes PDF resumes (up to 5MB) using `pdf-parse` and then uses the Gemini-2.0-flash model for review. This feature is exclusive to premium users.
* **Dashboard:** Keep track of your total AI creations and your active plan status (Free or Premium).
    * **Backend Details:** Fetches user-specific creations from the `creations` table in the database.
* **Community Showcase:** Explore and like AI-generated images shared by other users.
    * **Backend Details:** Retrieves publicly `published` creations from the database. Users can toggle likes, which updates the `likes` array in the database.

## Technologies Used

### Frontend

* **React.js:** For building the user interface.
* **React Router:** For navigation within the application.
* **Tailwind CSS:** For rapid UI development and styling.
* **Clerk (Clerk/Clerk-React):** For user authentication and managing user sessions and plans.
* **Axios:** For making API requests to the backend.
* **React Hot Toast:** For displaying notifications.
* **React Markdown:** For rendering Markdown content (e.g., AI-generated articles and reviews).
* **Lucide React:** For icons.

### Backend

* **Node.js/Express.js:** The server-side runtime and web framework.
* **OpenAI SDK:** Used to interact with the Gemini-2.0-flash model for text generation (articles, blog titles, resume reviews).
* **Neon Database (`@neondatabase/serverless`):** Serverless PostgreSQL database for storing user creations and managing likes.
* **Cloudinary:** For image storage, and image transformations (background removal, object removal).
* **ClipDrop API:** Used for the text-to-image generation feature.
* **Clerk (`@clerk/express`):** Backend integration for Clerk authentication, managing user metadata (e.g., `free_usage`), and checking user plans.
* **Multer:** Middleware for handling file uploads (e.g., resumes, images).

## Setup and Installation (For Developers)

To run QuickAI locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/quickai.git](https://github.com/your-username/quickai.git)
    cd quickai
    ```
    *(Replace `your-username/quickai.git` with the actual repository URL for both frontend and backend if they are in separate repos, otherwise, adjust as needed.)*

2.  **Install Frontend Dependencies:**
    *(Navigate to your frontend directory if it's separate)*
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Install Backend Dependencies:**
    *(Navigate to your backend directory if it's separate)*
    ```bash
    npm install
    # or
    yarn install
    ```

4.  **Configure Environment Variables:**
    Create a `.env` file in the root directory of **both your frontend and backend projects** (adjust paths if they are in a monorepo structure) and add your environment variables.

    **Frontend `.env`:**
    ```
    VITE_BASE_URL=YOUR_BACKEND_API_URL
    VITE_CLERK_PUBLISHABLE_KEY=YOUR_CLERK_PUBLISHABLE_KEY
    ```

    **Backend `.env`:**
    ```
    DATABASE_URL=YOUR_NEON_DATABASE_URL
    CLOUDINARY_CLOUD_NAME=YOUR_CLOUDINARY_CLOUD_NAME
    CLOUDINARY_API_KEY=YOUR_CLOUDINARY_API_KEY
    CLOUDINARY_API_SECRET=YOUR_CLOUDINARY_API_SECRET
    GEMINI_API_KEY=YOUR_GEMINI_API_KEY
    CLIPDROP_API_KEY=YOUR_CLIPDROP_API_KEY
    CLERK_SECRET_KEY=YOUR_CLERK_SECRET_KEY
    CLERK_PUBLISHABLE_KEY=YOUR_CLERK_PUBLISHABLE_KEY
    ```
    * **`DATABASE_URL`**: Connection string for your Neon PostgreSQL database.
    * **`CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`**: Your Cloudinary account credentials.
    * **`GEMINI_API_KEY`**: Your API key for accessing the Gemini model (used via the OpenAI SDK).
    * **`CLIPDROP_API_KEY`**: Your API key for the ClipDrop image generation service.
    * **`CLERK_SECRET_KEY`**: Your secret key from Clerk for backend authentication and user management.

5.  **Run the development servers:**

    **For Frontend:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The frontend application should now be running on `http://localhost:5173` (or another port if 5173 is in use).

    **For Backend:**
    ```bash
    npm start # Or your specific command to start the backend server
    ```
    Ensure your backend server is running and accessible at the `VITE_BASE_URL` configured in your frontend.


---
