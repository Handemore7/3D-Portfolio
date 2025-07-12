# Portfolio
Hello! this is my website https://portafolioc.netlify.app/#about 👀

## 🚀 Features

- **Interactive 3D Models**: Desktop computer and Earth models using Three.js
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Responsive Design**: Optimized for all device sizes
- **Contact Form**: Integrated with EmailJS for direct communication
- **Modern UI/UX**: Professional design with Tailwind CSS
- **Performance Optimized**: Code splitting and lazy loading
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS
- **Email Service**: EmailJS
- **Deployment**: Netlify

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Handemore7/3D-Portfolio.git
cd 3D-Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables:
```bash
cp .env.example .env
```

4. Configure your EmailJS credentials in `.env`:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

5. Start the development server:
```bash
npm run dev
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── canvas/         # 3D components
│   ├── About.jsx       # About section
│   ├── Contact.jsx     # Contact form
│   ├── Experience.jsx  # Work experience timeline
│   ├── Hero.jsx        # Landing section
│   ├── Navbar.jsx      # Navigation
│   ├── Tech.jsx        # Technology stack
│   └── Works.jsx       # Projects showcase
├── constants/          # Static data
├── hoc/               # Higher-order components
├── utils/             # Utility functions
├── assets/            # Images and icons
└── styles/            # CSS files
```

## 🎨 Customization

### Personal Information

Update the constants in `src/constants/index.js`:
- Personal details
- Work experience
- Projects
- Skills and technologies

### 3D Models

Replace the 3D models in the `public` folder:
- `desktop_pc/` - Computer model
- `planet/` - Earth model
- Ensure models are in GLTF format

### Styling

Modify Tailwind configuration in `tailwind.config.cjs`:
- Colors
- Fonts
- Spacing
- Custom utilities

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔒 Security

- Environment variables for sensitive data
- Input validation on contact form
- XSS protection
- Content Security Policy headers

<!-- ## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. -->

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

Carlos - handemore7@gmail.com

Project Link: [https://github.com/Handemore7/3D-Portfolio](https://github.com/Handemore7/3D-Portfolio)

## 🙏 Acknowledgments

- [Three.js](https://threejs.org/) for 3D graphics
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber) for React integration
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [EmailJS](https://emailjs.com/) for email service

---

⭐ Star this repository if you found it helpful!
