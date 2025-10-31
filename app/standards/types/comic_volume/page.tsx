'use client';

import { BookOpen, CheckCircle, Circle, FileText, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function ComicVolumeTypePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/standards" className="hover:text-foreground">Standards</Link>
        <ChevronRight className="w-4 h-4" />
        <Link href="/standards/types" className="hover:text-foreground">Type Standards</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-foreground">Comic Volume</span>
      </div>

      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
          <BookOpen className="h-4 w-4" />
          comic_volume
        </div>
        <p className="text-muted-foreground">
          A complete volume or collection of comic chapters. Ideal for published graphic novels, manga volumes, or comic book collections.
        </p>
      </div>

      <div className="space-y-8">
        {/* Required Fields */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Required Fields
          </h3>
          <div className="space-y-4">
            <div className="border-l-2 border-primary pl-4">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">type</code>
              <p className="text-sm text-muted-foreground mt-1">
                Must be set to <code className="bg-background px-1.5 py-0.5 rounded">&quot;comic_volume&quot;</code>
              </p>
            </div>
            <div className="border-l-2 border-primary pl-4">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">title</code>
              <p className="text-sm text-muted-foreground mt-1">
                The volume title or name
              </p>
            </div>
            <div className="border-l-2 border-primary pl-4">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">page_count</code>
              <p className="text-sm text-muted-foreground mt-1">
                Total number of pages in the volume
              </p>
            </div>
            <div className="border-l-2 border-primary pl-4">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">language</code>
              <p className="text-sm text-muted-foreground mt-1">
                ISO 639-1 language code (e.g., &quot;en&quot;, &quot;ja&quot;)
              </p>
            </div>
            <div className="border-l-2 border-primary pl-4">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">tags</code>
              <p className="text-sm text-muted-foreground mt-1">
                Array of tags
              </p>
            </div>
          </div>
        </div>

        {/* Optional Fields */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Circle className="h-5 w-5 text-muted-foreground" />
            Optional Fields
          </h3>
          <div className="space-y-4">
            <div className="border-l-2 border-muted pl-4">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">series</code>
              <p className="text-sm text-muted-foreground mt-1">
                Name of the series this volume belongs to
              </p>
            </div>
            <div className="border-l-2 border-muted pl-4">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">volume_number</code>
              <p className="text-sm text-muted-foreground mt-1">
                Volume number (can be integer or decimal for special editions)
              </p>
            </div>
            <div className="border-l-2 border-muted pl-4">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">authors</code>
              <p className="text-sm text-muted-foreground mt-1">
                Array of creator names (artists, writers, editors)
              </p>
            </div>
            <div className="border-l-2 border-muted pl-4">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">description</code>
              <p className="text-sm text-muted-foreground mt-1">
                Volume synopsis or description
              </p>
            </div>
            <div className="border-l-2 border-muted pl-4">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">cover_image</code>
              <p className="text-sm text-muted-foreground mt-1">
                Path to the volume cover image (e.g., &quot;pages/page-001.jpg&quot;)
              </p>
            </div>
            <div className="border-l-2 border-muted pl-4">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">publisher</code>
              <p className="text-sm text-muted-foreground mt-1">
                Publishing company or imprint
              </p>
            </div>
            <div className="border-l-2 border-muted pl-4">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">reading_direction</code>
              <p className="text-sm text-muted-foreground mt-1">
                &quot;ltr&quot; (left-to-right) or &quot;rtl&quot; (right-to-left, for manga)
              </p>
            </div>
            <div className="border-l-2 border-muted pl-4">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">layout_direction</code>
              <p className="text-sm text-muted-foreground mt-1">
                &quot;horizontal&quot; (traditional books/manga) or &quot;vertical&quot; (webtoons)
              </p>
            </div>
            <div className="border-l-2 border-muted pl-4">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">published_date</code>
              <p className="text-sm text-muted-foreground mt-1">
                ISO 8601 publication date
              </p>
            </div>
          </div>
        </div>

        {/* Example */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Example</h3>
          <div className="bg-muted rounded-lg p-4">
            <pre className="text-sm overflow-x-auto">
              <code>{`{
  "type": "comic_volume",
  "title": "Action Heroes Unleashed - Volume 1",
  "series": "Action Heroes Unleashed",
  "volume_number": 1,
  "cover_image": "pages/page-001.jpg",
  "page_count": 240,
  "authors": ["Master Artist", "Script Writer"],
  "publisher": "Epic Comics Press",
  "description": "The beginning of an epic saga.",
  "reading_direction": "ltr",
  "layout_direction": "horizontal",
  "published_date": "2023-01-15",
  "language": "en",
  "tags": ["action", "adventure", "superhero"]
}`}</code>
            </pre>
          </div>
        </div>

        {/* Key Differences */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Key Differences from Other Comic Types</h3>
          <div className="space-y-4">
            <div className="bg-background rounded p-4">
              <h4 className="font-semibold text-sm mb-2">vs. Comic Chapter</h4>
              <p className="text-sm text-muted-foreground">
                Comic volumes contain multiple chapters or episodes. Use <code className="bg-muted px-2 py-1 rounded text-xs">comic_chapter</code> for individual episodes and <code className="bg-muted px-2 py-1 rounded text-xs">comic_volume</code> for published collections.
              </p>
            </div>

            <div className="bg-background rounded p-4">
              <h4 className="font-semibold text-sm mb-2">vs. Comic Series</h4>
              <p className="text-sm text-muted-foreground">
                Comic series represent the entire ongoing publication metadata. Use <code className="bg-muted px-2 py-1 rounded text-xs">comic_volume</code> for individual published volumes and <code className="bg-muted px-2 py-1 rounded text-xs">comic_series</code> for series-wide information.
              </p>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="bg-muted/50 border rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Typical Use Cases</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Published manga volumes with ISBN numbers</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Graphic novel collections combining multiple chapters</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Comic book trade paperbacks</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Deluxe or special edition collections</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Digitally published complete volumes</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
