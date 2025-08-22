import { Card, CardContent } from "@/components/ui/card";
import LoginForm from "@/forms/auth/login-form";
import Image from "next/image";

export default function LogininPage() {
  return (
    <div className="flex flex-col gap-6">
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <LoginForm />
          <div className="bg-muted dark:grayscale relative hidden md:block">
            <Image src={'/assets/taxis.jpg'} alt="login image" height={500} width={500} className="h-full" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

