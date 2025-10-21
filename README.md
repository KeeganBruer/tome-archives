# Tome Editor

A Next.js web application for editing `.tome` files directly in your browser.

## Features

- **Create New .tome Files**: Create new .tome files from scratch with a pre-populated template
- **Drag & Drop Upload**: Easy file upload with drag-and-drop support
- **Monaco Editor**: Professional code editing experience powered by VS Code's editor
- **Client-Side Processing**: All file processing happens locally in your browser - no server uploads
- **Real-time Validation**: Instant JSON syntax validation as you type
- **Auto-formatting**: Beautify your JSON with one click
- **Safe Editing**: Reset changes or download modified files
- **Error Handling**: Comprehensive error messages for various file issues
- **Keyboard Shortcuts**: Full keyboard support for power users

## What is a .tome file?

A `.tome` file is a ZIP archive with a `.tome` extension that contains a `tome.json` file at the root level. This editor allows you to:

1. Upload a `.tome` file
2. Extract and edit the `tome.json` content
3. Save changes back into the archive
4. Download the modified `.tome` file

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Usage

### Creating a New .tome File

1. **Click "Create New"**: Either in the header or on the upload screen
2. **Enter a filename**: Type your desired filename (e.g., "my-project")
3. **Edit the template**: Modify the pre-populated JSON template
4. **Save and download**: Click "Save Changes" then "Download"

### Editing an Existing .tome File

1. **Upload a File**: Drag and drop a `.tome` file or click to browse
2. **Edit**: Modify the JSON content using the Monaco editor
3. **Validate**: The editor will show validation errors in real-time
4. **Format**: Click "Format" to prettify the JSON
5. **Save**: Click "Save Changes" to update the tome.json in the archive
6. **Download**: Click "Download" to save the modified `.tome` file

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Editor**: Monaco Editor (VS Code)
- **ZIP Handling**: JSZip
- **Validation**: Zod

## File Size Limits

- Maximum file size: 50MB

## Browser Compatibility

Works in all modern browsers that support:
- File API
- Blob API
- JSZip

## Security & Privacy

- All file processing happens client-side
- No files are uploaded to any server
- No data is stored or transmitted
- Your files remain completely private

## License

ISC
