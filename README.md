<h1 align="center">🧩 <b>Portfolio Website — Build Documentation</b></h1>
<h2>📘 <b>Overview</b></h2>

This document provides a complete, straightforward breakdown of how your personal portfolio website was built — including layout, structure, features, and the technologies used.

- Fully hand-coded using **HTML**, **CSS**, and **JavaScript**
- No external frameworks or build tools used

<h2>⚙️ <b>Core Dependencies</b></h2> <h3>1️⃣ Font Awesome (Icons)</h3>

- Used for all interface and social icons.

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
/>

<h3>2️⃣ Web3Forms (Contact Form Backend)</h3>

- Handles form submissions securely without requiring a custom server.

- Endpoint: https://api.web3forms.com/submit

<h2>🧱 <b>Structure & Layout</b></h2>

The portfolio follows a dual-panel design for a clear separation between navigation and main content.

<h3>📂 Left Sidebar (`<aside class="sidebar">`)</h3>

  - Fixed position (`width: 380px`, `height: 100vh`)
  - Independent scroll using `overflow-y: auto`
  - Contains:
    - Profile photo and contact info
    - Social links
    - Skills section
    - Education section
    - Contact form

<h3>🖥️ Right Content Area (`<main class="main-content">`)</h3>

  - Starts after the sidebar (`margin-left: 380px`)
  - Independent scroll using `overflow-y: auto`
  - Contains:
    - Projects
    - Achievements
    - Certificates
- Both panels use `.no-scrollbar` to hide scrollbars while keeping scroll functionality

<h2>🧭 <b>Header & Navigation</b></h2>

- Two headers are used for the layout:
  - **Sidebar Header** — shows name/logo and scrolls both panels to top
  - **Main Header** — contains navigation links and theme toggle
- Navigation links use `data-target-*` and JavaScript for:
  - Preventing default URL jumps
  - Smooth scrolling
  - Adjusting for fixed header height

<h2>👤 <b>Sidebar Components</b></h2> 

<h3>🪪 Profile</h3> 

- **Image:**

![Profile Picture](https://i.ibb.co/prwhWb7M/Picsart-25-08-25-11-28-06-390.jpg) 

<h3>🔗 Social Links</h3>

  - 📞 Phone
  - 💼 LinkedIn
  - 🐙 GitHub
  - ✖️ X (Twitter)
  - 🧩 LeetCode

<h3>🧠 Skills</h3>

Each skill links to its official documentation or platform


| Skill        | Link                                                                                                                   |
| :----------- | :--------------------------------------------------------------------------------------------------------------------- |
| C++          | [https://isocpp.org/](https://isocpp.org/)                                                                             |
| Python       | [https://www.python.org/](https://www.python.org/)                                                                     |
| HTML         | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)                 |
| CSS          | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)                   |
| JavaScript   | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)     |
| AWS          | [https://aws.amazon.com/](https://aws.amazon.com/)                                                                     |
| Docker       | [https://www.docker.com/](https://www.docker.com/)                                                                     |
| Kubernetes   | [https://kubernetes.io/](https://kubernetes.io/)                                                                       |
| Terraform    | [https://www.terraform.io/](https://www.terraform.io/)                                                                 |
| Git/GitHub   | [https://github.com/](https://github.com/)                                                                             |
| CI/CD        | [https://www.redhat.com/en/topics/devops/what-is-ci-cd](https://www.redhat.com/en/topics/devops/what-is-ci-cd)         |
| DevSecOps    | [https://www.redhat.com/en/topics/devops/what-is-devsecops](https://www.redhat.com/en/topics/devops/what-is-devsecops) |
| Scikit-learn | [https://scikit-learn.org/](https://scikit-learn.org/)                                                                 |
| Pandas       | [https://pandas.pydata.org/](https://pandas.pydata.org/)                                                               |
| Keras        | [https://keras.io/](https://keras.io/)                                                                                 |
| NumPy        | [https://numpy.org/](https://numpy.org/)                                                                               |
| TensorFlow   | [https://www.tensorflow.org/](https://www.tensorflow.org/)                                                             |



<h3>🎓 Education</h3>

Lists institutions with websites and logos

| **Institution**             | **Website**                                   | **Logo**                                                                                  |
| :-------------------------- | :-------------------------------------------- | :---------------------------------------------------------------------------------------- |
| Silicon University          | [silicon.ac.in](https://silicon.ac.in/)       | ![Logo](https://drive.google.com/thumbnail?id=1WVmcv47k-PG7B37FUfZ6t-ag7IXfhBt2\&sz=w200) |
| Nayagarh Higher Sec. School | [ngrautocol.ac.in](https://ngrautocol.ac.in/) | ![Logo](https://drive.google.com/thumbnail?id=1dAvwAPbOhWgLqE2okTfpwRxuU4Y1JG-h\&sz=w200) |
| D.A.V. Public School        | [davpuri.org](http://davpuri.org/)            | ![Logo](https://drive.google.com/thumbnail?id=1JVCYbKEl6Hm-Gw8bA1VOthijJ8oJzY5T\&sz=w200) |

<h3>📨 Contact Form</h3>

- Submits directly to your inbox via Web3Forms.
- Includes a hidden access key for authentication.

<form action="https://api.web3forms.com/submit" method="POST">
  <input
    type="hidden"
    name="access_key"
    value="c34a790c-ec56-438e-9ed6-02099e52ef76"
  />
</form>

<h2>🧩 <b>Projects & Achievements</b></h2>

- Projects displayed in responsive grids with modals for details
- Each card includes:
  - Project name
  - Repository / documentation link
  - Thumbnail or preview
- Clicking a project opens a modal for extended info
- Certificates and education logos use a similar grid pattern

| **Project**          | **Repository / Docs**                                                                                                                               | **Preview**                                                                                   |
| :------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| Morse Code Converter | [GitHub](https://github.com/jagyanjit/Morse-Code-Converter)                                                                                         | ![Preview](https://vumbnail.com/1122621998.jpg)                                               |
| Mobile App UI        | [GitHub](https://github.com/jagyanjit/Dummy-Mobile-App)                                                                                             | ![Preview](https://vumbnail.com/1122725179.jpg)                                               |
| DevOps Project       | [Repo](https://github.com/jagyanjit/DevopsProject1) / [Docs](https://docs.google.com/document/d/1BrmY6poKK3PfhS8PtQmzWv3cpQSjZQxX/edit?usp=sharing) | ![Preview](https://drive.google.com/thumbnail?id=1MkU47ro2UFx3qxlwVIrXY-ot6cNTj_2b\&sz=w1000) |
| ML Crop Model        | [Notebook](https://github.com/jagyanjit/Machine-Learning-and-Deep-Learning/blob/main/Project_crop.ipynb)                                            | ![Preview](https://drive.google.com/thumbnail?id=1XO2P8jRlKUwItV5bvi2_Qxmk7a4g0GSQ\&sz=w1000) |
| ML Covid Model       | [Notebook](https://github.com/jagyanjit/Machine-Learning-and-Deep-Learning/blob/main/Project_covid.ipynb)                                           | ![Preview](https://drive.google.com/thumbnail?id=1XO2P8jRlKUwItV5bvi2_Qxmk7a4g0GSQ\&sz=w1000) |


Tip: Clicking a card opens its modal with more info.
Certificates and education logos follow a similar responsive grid layout.

<h2>🌗 <b>Theme Toggle</b></h2>

A simple light/dark mode switch implemented using:

- **HTML:** Checkbox toggle inside a label
- **CSS:** Moves slider and switches icons
- **JavaScript:** Stores theme preference in `localStorage`

<h2>✅ <b>Summary</b></h2>

- Fully custom-built using **HTML**, **CSS**, and **JavaScript**
- Dual-panel responsive layout
- Smooth navigation and accessible UI
- Integrated contact form via **Web3Forms**
- Dynamic modals and theme toggle for better UX
