import { Card } from '@/components/ui/card';

export default function TabsList({ tabs }: { tabs: any[] }) {
  return tabs.map((tab: any, index: number) => (
    <Card key={index} className="grid gap-x-2 items-center p-2 mb-2" style={{ gridTemplateColumns: '24px 1fr' }}>
      <img src={tab.favIconUrl} />
      <div style={{ containerType: 'inline-size' }}>
        <div className="text-sm font-bold font-medium leading-none whitespace-nowrap overflow-hidden text-ellipsis">
          {tab.title}
        </div>
        <div className="text-sm text-muted-foreground whitespace-nowrap overflow-hidden text-ellipsis">{tab.url}</div>
      </div>
    </Card>
  ));
}
