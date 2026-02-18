# GSP Website Template

A professional website template for the General Science Program (GSP) with clean, modern design following shadcn component styling principles.

## Features

- 🎨 **shadcn-inspired design system** - CSS variables, semantic colors, consistent spacing
- 🌓 **Dark mode support** - Automatic theme switching based on system preferences
- 📱 **Fully responsive** - Optimized for desktop, tablet, and mobile devices
- ♿ **Accessible** - Proper semantic HTML and focus states
- 🎯 **Clean separation** - HTML structure in `index.html`, styles in `styles.css`

## Files

- `index.html` - Main HTML file with complete website structure
- `styles.css` - CSS file with shadcn-inspired design system

## Usage

Simply open `index.html` in a web browser to view the template. For development:

```bash
# Using Python 3
python3 -m http.server 8080

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8080
```

Then navigate to `http://localhost:8080` in your browser.

## Sections

The template includes the following sections:

1. **Header** - Sticky navigation with logo and menu links
2. **Hero** - Main banner with title, description, and CTA buttons
3. **About** - Feature cards showcasing program highlights
4. **Programs** - List of available programs with badges
5. **Research** - Research areas displayed as tags
6. **Contact** - Contact information and form
7. **Footer** - Multiple columns with links and copyright

## Design System

### Color Variables
Uses HSL color system with semantic naming:
- `--primary` / `--secondary` - Main brand colors
- `--muted` / `--accent` - Supporting colors
- `--border` / `--input` - UI element colors
- `--background` / `--foreground` - Base colors

### Components
- Buttons (primary, outline)
- Cards with hover effects
- Form inputs and textareas
- Navigation with underline animation
- Badges and tags
- Responsive grid layouts

### Responsive Breakpoints
- Desktop: > 768px
- Tablet: 481px - 768px
- Mobile: ≤ 480px

## Customization

To customize the template:

1. **Colors**: Edit CSS variables in `:root` section of `styles.css`
2. **Content**: Modify text and structure in `index.html`
3. **Spacing**: Adjust `--spacing-*` variables
4. **Typography**: Change font families in `--font-sans` variable

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Supports both light and dark mode via `prefers-color-scheme`

## License

See LICENSE file for details.
