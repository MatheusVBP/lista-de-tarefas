import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="w-full h-screen bg-base-300 flex justify-center items-center">
      <Card className="w-lg">
        <CardContent className="flex gap-2">
          <Input />
          <Button>ola</Button>
        </CardContent>
      </Card>
    </main>
  );
}
