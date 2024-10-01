import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

import TabsList from './TabsList';

export default function WindowList({ windows }: { windows: any[] }) {
  return (
    <div className="flex w-full">
      {windows.map((window: any, index: number) => (
        <Card key={index} className="m-4 min-w-64 max-w-80">
          <CardHeader>
            <CardTitle>
              <div>
                Window {index + 1} - ID: {window.id}
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
