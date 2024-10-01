import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import TabsList from './TabsList';

export default function WindowList({ windows }: { windows: any[] }) {
  return (
    <div className="flex w-full">
      {windows.map((window: any, index: number) => (
        <Card key={index} className="m-4 min-w-64 max-w-80">
          <CardHeader>
            <CardTitle>
              <div>
                Window {index + 1} - ID: {window.id}{' '}
                {window.focused && (
                  <Badge variant="outline" className="ml-2">
                    Active
                  </Badge>
                )}
                <br />
                {window.tabs.length} tabs
              </div>
            </CardTitle>
            <CardContent>
              <TabsList tabs={window.tabs} />
            </CardContent>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
