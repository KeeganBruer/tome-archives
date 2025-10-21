import Link from 'next/link';
import { FileArchive, Edit, Eye, FileCode, Package, Layers, CheckCircle, BookOpen, FileImage, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
              <FileArchive className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Tome Trove</h1>
              <p className="text-sm text-muted-foreground">Tools for working with .tome files</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm">
              <FileArchive className="h-4 w-4" />
              <span>Introducing the .tome file format</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              A Standard for Structured Archives
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed">
              .tome files are ZIP archives with a standardized structure, designed for packaging
              projects, documentation, and multi-file content with rich metadata.
            </p>
          </div>
        </section>

        {/* What is .tome Section */}
        <section className="bg-muted/50 border-y">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-8 text-center">What is a .tome file?</h3>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card rounded-lg p-6 border">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">ZIP Archive</h4>
                  <p className="text-sm text-muted-foreground">
                    Built on the proven ZIP format, ensuring compatibility and compression.
                  </p>
                </div>

                <div className="bg-card rounded-lg p-6 border">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <FileCode className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Metadata Standard</h4>
                  <p className="text-sm text-muted-foreground">
                    Every .tome contains a tome.json file with version, author, and description.
                  </p>
                </div>

                <div className="bg-card rounded-lg p-6 border">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Layers className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Multi-File Support</h4>
                  <p className="text-sm text-muted-foreground">
                    Package entire projects with folder structures, keeping organization intact.
                  </p>
                </div>
              </div>

              {/* File Structure Example */}
              <div className="mt-8 bg-card rounded-lg p-6 border">
                <h4 className="font-semibold mb-4">Structure Example</h4>
                <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm space-y-1">
                  <div className="text-muted-foreground">my-project.tome (ZIP archive)</div>
                  <div className="ml-4">├── tome.json <span className="text-muted-foreground">← Required metadata</span></div>
                  <div className="ml-4">├── README.md</div>
                  <div className="ml-4">├── docs/</div>
                  <div className="ml-8">│   ├── getting-started.md</div>
                  <div className="ml-8">│   └── api.md</div>
                  <div className="ml-4">└── assets/</div>
                  <div className="ml-8">    └── logo.png</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-center">How .tome Improves on Existing Formats</h3>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              While formats like .cbz and .epub serve specific purposes well, .tome provides a more flexible,
              standardized approach for general-purpose content packaging.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* CBZ Comparison */}
              <div className="bg-card rounded-lg p-6 border">
                <div className="flex items-start gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                    <FileImage className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">.cbz (Comic Book Archive)</h4>
                    <p className="text-xs text-muted-foreground">ZIP archive for comic books</p>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium mb-1">Limitations:</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-0.5">✗</span>
                        <span>No standardized metadata format</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-0.5">✗</span>
                        <span>Limited to image sequences</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-0.5">✗</span>
                        <span>No official specification</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-1 text-green-500">.tome Advantages:</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                        <span>Structured JSON metadata standard</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                        <span>Support for any file type and structure</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                        <span>Clear versioning and extensibility</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* EPUB Comparison */}
              <div className="bg-card rounded-lg p-6 border">
                <div className="flex items-start gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                    <BookOpen className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">.epub (Electronic Publication)</h4>
                    <p className="text-xs text-muted-foreground">ZIP archive for ebooks</p>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium mb-1">Limitations:</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-0.5">✗</span>
                        <span>Complex XML-based structure</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-0.5">✗</span>
                        <span>Designed specifically for books</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-0.5">✗</span>
                        <span>Strict file organization requirements</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-1 text-green-500">.tome Advantages:</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                        <span>Simple JSON metadata (easy to parse)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                        <span>General-purpose for any project type</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                        <span>Flexible folder structure</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Benefits Summary */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <FileArchive className="h-5 w-5 text-primary" />
                Why Choose .tome?
              </h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-medium mb-1">Universal</p>
                  <p className="text-muted-foreground">
                    Works for documentation, projects, media collections, or any structured content
                  </p>
                </div>
                <div>
                  <p className="font-medium mb-1">Developer-Friendly</p>
                  <p className="text-muted-foreground">
                    JSON metadata is easy to read, write, and parse in any programming language
                  </p>
                </div>
                <div>
                  <p className="font-medium mb-1">Future-Proof</p>
                  <p className="text-muted-foreground">
                    Built on ZIP with version control, ensuring long-term compatibility
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CBZ Example Section */}
        <section className="bg-muted/50 border-y">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-center">Example: Comic Book Archive (.cbz equivalent)</h3>
              <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                Here&apos;s how to structure a .tome file as a comic book archive with proper metadata
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* File Structure */}
                <div className="bg-card rounded-lg p-6 border flex flex-col">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Layers className="h-5 w-5 text-primary" />
                    File Structure
                  </h4>
                  <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm space-y-1 flex-1">
                    <div className="text-muted-foreground">my-comic.tome</div>
                    <div className="ml-4">├── tome.json</div>
                    <div className="ml-4">└── images/</div>
                    <div className="ml-8">    ├── page001.png</div>
                    <div className="ml-8">    ├── page002.png</div>
                    <div className="ml-8">    ├── page003.png</div>
                    <div className="ml-8">    ├── page004.png</div>
                    <div className="ml-8">    └── ...</div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    Images are numbered sequentially for easy ordering
                  </p>
                </div>

                {/* tome.json Example */}
                <div className="bg-card rounded-lg p-6 border flex flex-col">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <FileCode className="h-5 w-5 text-primary" />
                    tome.json Example
                  </h4>
                  <div className="bg-muted/50 rounded-lg p-4 font-mono text-xs space-y-0.5 overflow-x-auto flex-1">
                    <div>{'{'}</div>
                    <div className="ml-2">&quot;type&quot;: &quot;comic_chapter&quot;,</div>
                    <div className="ml-2">&quot;version&quot;: &quot;1.0.0&quot;,</div>
                    <div className="ml-2">&quot;name&quot;: &quot;Chapter 1 - An Example Title&quot;,</div>

                    <div className="ml-2">&quot;author&quot;: {'['}</div>
                    <div className="ml-4">&quot;Author One&quot;,</div>
                    <div className="ml-4">{'{'}</div>
                    <div className="ml-6">&quot;name&quot;:&quot;Author Two&quot;,</div>
                    <div className="ml-6">&quot;url&quot;:&quot;https://...&quot;</div>
                    <div className="ml-4">{'}'}</div>
                    <div className="ml-2">{'],'}</div>
                    
                    <div className="ml-2">&quot;publisher&quot;: &quot;Publisher Name&quot;,</div>
                    <div className="ml-2">&quot;translator&quot;: &quot;Translator Group&quot;,</div>
                    <div className="ml-2">&quot;release-status&quot;: &quot;Completed&quot;,</div>
                    <div className="ml-2">&quot;release-date&quot;: {(new Date()).toUTCString()}</div>
                    <div className="ml-2">&quot;description&quot;: &quot;The first chapter of a comic book&quot;,</div>
                    
                    <div className="ml-2">&quot;genres&quot;: {'['} &quot;Adventure&quot;, &quot;Fantasy&quot; {']'}</div>
                    <div className="ml-2">&quot;tags&quot;: {'['} &quot;Isakai&quot;, &quot;OP MC&quot; {']'}</div>
                    <div>{'}'}</div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    Rich metadata beyond what .cbz supports
                  </p>
                </div>
              </div>

              {/* Benefits Callout */}
              <div className="mt-6 bg-card rounded-lg p-6 border border-primary/20">
                <h4 className="font-semibold mb-3">Advantages over traditional .cbz:</h4>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Standardized metadata</strong> - Publisher, issue number, genre stored in structured JSON
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Version control</strong> - Track format version for future compatibility
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Extensible</strong> - Add custom fields like colorist, letterer, or ratings
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Easy to parse</strong> - Any programming language can read JSON
                    </span>
                  </div>
                </div>

                <div className="flex justify-end mt-4">
                  <Link href="/standards">
                    <Button variant="outline" className="gap-2">
                      <FileCode className="h-4 w-4" />
                      View Standards
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">Available Tools</h3>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Editor Card */}
              <div className="bg-card rounded-lg border overflow-hidden hover:border-primary/50 transition-colors">
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center">
                      <Edit className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <span className="px-2 py-1 rounded-md bg-green-500/10 text-green-500 text-xs font-medium">
                      Available
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-2">Tome Editor</h4>
                    <p className="text-muted-foreground">
                      Create and edit .tome files with a powerful multi-file editor.
                      Upload files, edit content, and manage your tome archives.
                    </p>
                  </div>

                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Multi-file editing with syntax highlighting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Template system for quick project setup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>File upload and archive management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Browser-based, no server upload required</span>
                    </li>
                  </ul>

                  <Link href="/tools/editor">
                    <Button className="w-full">
                      Open Editor
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Viewer Card */}
              <div className="bg-card rounded-lg border overflow-hidden hover:border-primary/50 transition-colors">
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center">
                      <Eye className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <span className="px-2 py-1 rounded-md bg-green-500/10 text-green-500 text-xs font-medium">
                      Available
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-2">Tome Viewer</h4>
                    <p className="text-muted-foreground">
                      Browse and view .tome files without editing. Perfect for exploring
                      tome archives and reading documentation.
                    </p>
                  </div>

                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Read-only file browsing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Image and text file preview</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Preview from editor or upload directly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Browser-based, no server upload required</span>
                    </li>
                  </ul>

                  <Link href="/tools/viewer">
                    <Button className="w-full">
                      Open Viewer
                    </Button>
                  </Link>
                </div>
              </div>

              {/* CBZ Converter Card */}
              <div className="bg-card rounded-lg border overflow-hidden hover:border-primary/50 transition-colors">
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="h-12 w-12 rounded-lg bg-blue-500 flex items-center justify-center">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <span className="px-2 py-1 rounded-md bg-green-500/10 text-green-500 text-xs font-medium">
                      Available
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-2">CBZ Converter</h4>
                    <p className="text-muted-foreground">
                      Convert CBZ (comic book archive) files to .tome format with
                      comprehensive metadata support for comic chapters, volumes, and series.
                    </p>
                  </div>

                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Multi-type support (chapter, volume, series)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Drag-and-drop file upload</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Configure rich metadata during conversion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Live preview before download</span>
                    </li>
                  </ul>

                  <Link href="/tools/converters/cbz">
                    <Button className="w-full">
                      Open Converter
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-card mt-auto">
        <div className="container mx-auto px-4 py-6">
          <p className="text-xs text-muted-foreground text-center">
            All processing happens locally in your browser. Your files are never uploaded to a server.
          </p>
        </div>
      </footer>
    </div>
  );
}
