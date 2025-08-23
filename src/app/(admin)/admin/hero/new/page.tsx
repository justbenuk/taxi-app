import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CreateNewHeroForm from "@/forms/hero/create-new-hero-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Add New Hero'
}

export default function NewHeroPage() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>New Hero Item</CardTitle>
        </CardHeader>
        <CardContent>
          <CreateNewHeroForm />
        </CardContent>
      </Card>
    </div>
  )
}

