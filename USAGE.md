# Tome Editor - Usage Guide

## Getting Started

### Installation

1. Navigate to the TomeEditor directory:
   ```bash
   cd TomeEditor
   ```

2. Install dependencies (if not already done):
   ```bash
   npm install
   ```

### Running the Application

#### Development Mode
```bash
npm run dev
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

#### Production Mode
```bash
npm run build
npm start
```

## How to Use

You can either **create a new .tome file** or **edit an existing one**.

---

## Creating a New .tome File

### Step 1: Click "Create New"

There are two places to find the "Create New" button:
- **In the header** (top-right corner) - always visible
- **On the upload screen** - next to the "Choose File" button

### Step 2: Enter a Filename

1. A dialog will appear
2. Enter your desired filename (e.g., "my-project")
3. The `.tome` extension will be added automatically if you don't include it
4. Click **"Create"**

### Step 3: Edit the Template

Your new file will load with this template:

```json
{
  "name": "",
  "version": "1.0.0",
  "description": "",
  "author": "",
  "created": "2025-10-19",
  "metadata": {}
}
```

Fill in the fields as needed or add your own custom properties.

### Step 4: Save and Download

1. Click **"Save Changes"** (or press `Ctrl/Cmd + S`)
2. Click **"Download"** (or press `Ctrl/Cmd + D`)
3. Your new `.tome` file will be downloaded

---

## Editing an Existing .tome File

### Step 1: Upload a .tome File

There are two ways to upload a file:

**Option A: Drag and Drop**
1. Drag your `.tome` file from your file explorer
2. Drop it onto the upload area
3. The file will be validated and loaded automatically

**Option B: File Picker**
1. Click the "Choose File" button
2. Select your `.tome` file from the dialog
3. The file will be validated and loaded automatically

### Step 2: Edit the JSON

Once your file is loaded:

1. The `tome.json` content will appear in the Monaco Editor
2. Edit the JSON as needed
3. The editor will show:
   - ✅ Green checkmark if JSON is valid
   - ❌ Red alert if JSON has syntax errors
   - 🟡 Yellow dot if file is modified

**Editor Features:**
- Syntax highlighting
- Auto-completion
- Line numbers
- Code folding (click arrows next to line numbers)
- Minimap (on the right side)
- Find/Replace (Ctrl/Cmd + F)

### Step 3: Format the JSON (Optional)

Click the **Format** button or press `Ctrl/Cmd + Shift + F` to:
- Auto-indent the JSON
- Add consistent spacing
- Make the JSON more readable

### Step 4: Save Your Changes

When you're happy with your edits:

1. Click the **Save Changes** button or press `Ctrl/Cmd + S`
2. This updates the `tome.json` file inside the ZIP archive
3. The yellow "Modified" indicator will change to green "Saved"
4. All other files in the archive are preserved

### Step 5: Download the Modified File

Click the **Download** button or press `Ctrl/Cmd + D` to:
- Generate the updated `.tome` file
- Download it to your computer
- Keep the original filename

### Additional Actions

**Reset Changes**
- Click the **Reset** button or press `Ctrl/Cmd + Shift + R`
- This will discard all edits and restore the original content
- Useful if you make a mistake

**Upload Another File**
- Click the **Clear** button in the upload area (when visible)
- Upload a new `.tome` file

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl/Cmd + S` | Save changes to the archive |
| `Ctrl/Cmd + D` | Download the modified .tome file |
| `Ctrl/Cmd + Shift + F` | Format/prettify the JSON |
| `Ctrl/Cmd + Shift + R` | Reset changes to original |
| `Ctrl/Cmd + F` | Find in editor |
| `Ctrl/Cmd + H` | Find and replace in editor |
| `Ctrl/Cmd + Z` | Undo |
| `Ctrl/Cmd + Shift + Z` | Redo |

## Understanding the Status Indicators

### In the Action Bar:

**File Status**
- 🟢 "Saved" - No unsaved changes
- 🟡 "Modified" - You have unsaved changes

**JSON Validity**
- ✅ "Valid JSON" - JSON syntax is correct
- ❌ "Invalid JSON" - JSON has syntax errors

### Button States:

Buttons will be **disabled** (grayed out) when:
- **Save Changes**: When JSON is invalid or no changes made
- **Download**: When JSON is invalid
- **Reset**: When no changes have been made
- **Format**: When no file is loaded

## Error Messages

### "Please select a .tome file"
- You tried to upload a file that doesn't end in `.tome`
- Solution: Make sure your file has the `.tome` extension

### "File size exceeds maximum limit"
- Your file is larger than 50MB
- Solution: Try a smaller file or compress your archive

### "Unable to read .tome file. File may be corrupted"
- The file is not a valid ZIP archive
- Solution: Verify the file is a valid ZIP renamed to `.tome`

### "tome.json not found in archive root"
- The `.tome` file doesn't contain a `tome.json` at the root level
- Solution: Make sure `tome.json` is at the root of the archive, not in a subfolder

### "tome.json contains invalid JSON"
- The `tome.json` file has syntax errors
- Solution: Fix the JSON syntax or use a different file

## Tips & Best Practices

1. **Always validate before downloading**
   - Make sure you see the green "Valid JSON" indicator
   - Invalid JSON will prevent downloading

2. **Use Format for readability**
   - Click Format after making edits
   - Makes it easier to spot errors

3. **Save frequently**
   - Use `Ctrl/Cmd + S` often
   - Saves your changes to the in-memory archive

4. **Use Reset if uncertain**
   - Made too many changes? Click Reset
   - You can always start over

5. **Check the file size**
   - Large files may take longer to process
   - Consider breaking up very large tome.json files

6. **Keep backups**
   - Always keep a backup of your original `.tome` file
   - This editor doesn't modify your original file until you download

## Privacy & Security

- ✅ **All processing happens in your browser**
- ✅ **No files are uploaded to any server**
- ✅ **No data is stored or saved**
- ✅ **Your files remain completely private**

## Troubleshooting

### Editor is blank after uploading
- Check the browser console for errors (F12)
- Verify your file is a valid .tome file
- Try refreshing the page and re-uploading

### Can't download the file
- Make sure JSON is valid (green checkmark)
- Check your browser's download settings
- Try a different browser

### File is too large
- Maximum file size is 50MB
- Compress your tome.json or remove unnecessary files from the archive

### Changes aren't saving
- Click "Save Changes" before downloading
- Make sure JSON is valid
- Check for error messages

## Support

For issues or feature requests, please check the README.md or PLAN.md files for more information.
