# CaoSon UI — React Component Library

A modern React component library inspired by Material Design principles. Built with React and SCSS Modules.

---

## 🚀 Getting Started

### Installation

```bash
git clone https://github.com/kristinet/ui-library
cd Jennie-Project
npm install
```

### Run Development Server

```bash
npm run dev
# or
npm start
```

Opens at **http://localhost:3000**

### Build for Production

```bash
npm run build
```

---

## 📦 Components

### 1. AppBar

A responsive top navigation bar with support for drawer menus on mobile.

**Import**
```jsx
import AppBar from './components/AppBar/AppBar';
```

**Props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `'MUI'` | Text title shown in the bar |
| `logo` | `ReactNode` | — | Custom logo element (replaces title) |
| `position` | `'fixed' \| 'absolute' \| 'relative' \| 'sticky'` | `'fixed'` | CSS position of the AppBar |
| `color` | `'default' \| 'primary' \| 'secondary' \| 'transparent'` | `'default'` | Color theme |
| `variant` | `'standard' \| 'dense' \| 'prominent'` | `'standard'` | Height variant |
| `menuItems` | `{ label, href, onClick }[]` | `[]` | Navigation links |
| `leftMenuItems` | `{ label, href, onClick }[]` | `[]` | Left nav links (when `centerLogo` is true) |
| `rightMenuItems` | `{ label, href, onClick }[]` | `[]` | Right nav links (when `centerLogo` is true) |
| `centerLogo` | `boolean` | `false` | Centers the logo with left/right nav layout |
| `showSearch` | `boolean` | `false` | Show search input |
| `showSearchPrimary` | `boolean` | `false` | Show search in the center (primary position) |
| `searchPlaceholder` | `string` | `'Search...'` | Search input placeholder |
| `onMenuClick` | `function` | — | Callback when hamburger menu is clicked |
| `onSearchChange` | `function` | — | Callback on search input change |
| `rightActions` | `{ icon, label, onClick, badge }[]` | `[]` | Action buttons on the right |
| `showUserProfile` | `boolean` | `false` | Show user profile button |
| `userAvatar` | `string` | — | URL of user avatar image |
| `userLabel` | `string` | — | Alt text for user avatar |
| `onUserClick` | `function` | — | Callback when user button is clicked |

**Examples**

```jsx
// Basic AppBar
<AppBar title="CaoSon" color="primary" />

// With navigation links
<AppBar
  title="CaoSon"
  color="primary"
  menuItems={[
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]}
/>

// Center logo layout
<AppBar
  title="CaoSon"
  centerLogo
  leftMenuItems={[{ label: 'Docs', href: '/docs' }]}
  rightMenuItems={[{ label: 'GitHub', href: 'https://github.com' }]}
/>

// With search and user profile
<AppBar
  title="CaoSon"
  showSearch
  showUserProfile
  onSearchChange={(value) => console.log(value)}
  onUserClick={() => console.log('user clicked')}
/>
```

---

### 2. Button

A versatile button component with multiple variants, colors, and sizes.

**Import**
```jsx
import Button from './components/Button/Button';
```

**Props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Button label content |
| `variant` | `'text' \| 'contained' \| 'outlined'` | `'text'` | Button style variant |
| `color` | `'primary' \| 'secondary' \| 'success' \| 'error' \| 'warning' \| 'info'` | `'primary'` | Color theme |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size |
| `disabled` | `boolean` | `false` | Disables the button |
| `disableElevation` | `boolean` | `false` | Removes shadow on `contained` variant |
| `href` | `string` | — | If provided, renders as `<a>` tag |
| `onClick` | `function` | — | Click handler |

**Examples**

```jsx
// Variants
<Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>

// Colors
<Button variant="contained" color="primary">Primary</Button>
<Button variant="contained" color="secondary">Secondary</Button>
<Button variant="contained" color="success">Success</Button>
<Button variant="contained" color="error">Error</Button>

// Sizes
<Button variant="contained" size="small">Small</Button>
<Button variant="contained" size="medium">Medium</Button>
<Button variant="contained" size="large">Large</Button>

// Disabled
<Button variant="contained" disabled>Disabled</Button>

// As link
<Button href="/docs" variant="outlined">Go to Docs</Button>
```

---

### 3. Typography

A text component that maps variants to semantic HTML elements following Material Design typographic scale.

**Import**
```jsx
import Typography from './components/Typography/Typography';
```

**Props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'h1'…'h6' \| 'subtitle1' \| 'subtitle2' \| 'body1' \| 'body2' \| 'button' \| 'caption' \| 'overline'` | `'body1'` | Text style variant |
| `color` | `'default' \| 'success' \| 'error'` | `'default'` | Text color |
| `component` | `string` | — | Override the rendered HTML tag |
| `children` | `ReactNode` | — | Text content |

**Default HTML tag mapping**

| Variant | Tag |
|---------|-----|
| `h1` – `h6` | `<h1>` – `<h6>` |
| `subtitle1`, `subtitle2` | `<h6>` |
| `body1`, `body2` | `<p>` |
| `button`, `caption`, `overline` | `<span>` |

**Examples**

```jsx
<Typography variant="h1">Heading 1</Typography>
<Typography variant="h2">Heading 2</Typography>
<Typography variant="subtitle1">Subtitle text</Typography>
<Typography variant="body1">Body paragraph text</Typography>
<Typography variant="caption">Caption text</Typography>
<Typography variant="overline">OVERLINE TEXT</Typography>

// With color
<Typography variant="body1" color="success">Success message</Typography>
<Typography variant="body1" color="error">Error message</Typography>

// Override tag
<Typography variant="h1" component="span">Styled as h1, rendered as span</Typography>
```

---

### 4. Card

A simple container card component with style variants.

**Import**
```jsx
import Card from './components/Card/Card';
```

**Props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Card content |
| `variant` | `'standard' \| 'outlined'` | `'standard'` | Card style |
| `style` | `object` | — | Inline styles |
| `className` | `string` | `''` | Additional CSS class |

**Examples**

```jsx
// Standard card
<Card>
  <Typography variant="h5">Card Title</Typography>
  <Typography variant="body2">Card content goes here.</Typography>
</Card>

// Outlined card
<Card variant="outlined">
  <Typography variant="body1">Outlined card content</Typography>
</Card>

// With custom style
<Card style={{ backgroundColor: '#f5f5f5', padding: '24px' }}>
  <Typography variant="body1">Custom styled card</Typography>
</Card>
```

---

### 5. Grid

A responsive 12-column flexbox grid system with breakpoint support.

**Import**
```jsx
import Grid from './components/Grid/Grid';
```

**Props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `container` | `boolean` | `false` | Makes this a grid container |
| `item` | `boolean` | `false` | Makes this a grid item |
| `size` | `number \| { xs, sm, md, lg, xl }` | — | Column span (out of 12) |
| `xs`, `sm`, `md`, `lg`, `xl` | `number \| 'grow'` | — | Breakpoint-specific column spans |
| `offset` | `number \| object` | — | Column offset |
| `spacing` | `number` | — | Gap between items (multiplied by 8px) |
| `rowSpacing` | `number` | — | Row gap |
| `columnSpacing` | `number` | — | Column gap |
| `direction` | `'row' \| 'row-reverse' \| 'column' \| 'column-reverse'` | — | Flex direction |
| `alignItems` | `'flex-start' \| 'center' \| 'flex-end' \| 'stretch' \| 'baseline'` | — | Align items |
| `justifyContent` | `'flex-start' \| 'center' \| 'flex-end' \| 'space-between' \| 'space-around' \| 'space-evenly'` | — | Justify content |

**Examples**

```jsx
// Basic 12-column grid
<Grid container spacing={2}>
  <Grid item size={6}>
    <Card>Left column</Card>
  </Grid>
  <Grid item size={6}>
    <Card>Right column</Card>
  </Grid>
</Grid>

// Responsive grid
<Grid container spacing={3}>
  <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
    <Card>Column 1</Card>
  </Grid>
  <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
    <Card>Column 2</Card>
  </Grid>
  <Grid item size={{ xs: 12, sm: 12, md: 4 }}>
    <Card>Column 3</Card>
  </Grid>
</Grid>

// With alignment
<Grid container justifyContent="center" alignItems="center" spacing={2}>
  <Grid item size={4}>Centered content</Grid>
</Grid>
```

---

### 6. Stack

A flex layout component for stacking children vertically or horizontally with configurable spacing.

**Import**
```jsx
import Stack from './components/Stack/Stack';
```

**Props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Child elements |
| `direction` | `'row' \| 'row-reverse' \| 'column' \| 'column-reverse'` | `'column'` | Flex direction |
| `spacing` | `number \| string` | `0` | Gap between items (number × 8px) |
| `gap` | `number \| string` | — | Direct gap value (overrides `spacing`) |
| `divider` | `ReactNode` | — | Element inserted between children |
| `alignItems` | `'flex-start' \| 'center' \| 'flex-end' \| 'stretch' \| 'baseline'` | — | Align items |
| `justifyContent` | `'flex-start' \| 'center' \| 'flex-end' \| 'space-between' \| 'space-around' \| 'space-evenly'` | — | Justify content |
| `flexWrap` | `boolean` | `false` | Enable flex wrapping |
| `style` | `object` | — | Additional inline styles |

**Examples**

```jsx
// Vertical stack (default)
<Stack spacing={2}>
  <Button variant="contained">Button 1</Button>
  <Button variant="outlined">Button 2</Button>
  <Button variant="text">Button 3</Button>
</Stack>

// Horizontal row
<Stack direction="row" spacing={1} alignItems="center">
  <Button variant="contained">Save</Button>
  <Button variant="outlined">Cancel</Button>
</Stack>

// With divider
<Stack
  direction="row"
  divider={<span style={{ borderLeft: '1px solid #ccc' }} />}
  spacing={2}
>
  <Typography>Item 1</Typography>
  <Typography>Item 2</Typography>
  <Typography>Item 3</Typography>
</Stack>

// Direct gap value
<Stack direction="row" gap={20}>
  <Card>A</Card>
  <Card>B</Card>
</Stack>
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── AppBar/         # Navigation bar
│   ├── Button/         # Button variants
│   ├── Card/           # Card container
│   ├── Codeblock/      # Code snippet display
│   ├── ComponentNav/   # Sidebar navigation
│   ├── Grid/           # 12-column grid system
│   ├── Stack/          # Flex stack layout
│   └── Typography/     # Text variants
├── pages/
│   ├── Assessment3/    # Demo pages
│   └── Docs/           # Component documentation pages
└── App.js
```

---

## 🛠 Tech Stack

- **React** 18
- **SCSS Modules** for component-scoped styling
- **Lucide React** for icons
- **React Router DOM** v6 for routing
- **Motion** for animations

---

## 👤 Author

**CaoSon** — [GitHub](https://github.com/kristinet/ui-library)
