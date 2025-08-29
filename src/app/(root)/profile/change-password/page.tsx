import ProfileSectionTitle from "@/components/header/profile-section-title"
import ChangePasswordForm from "@/forms/profile/change-password-form"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Change your password'
}

export default function ChangePasswordPage() {

  return (
    <div>
      <ProfileSectionTitle title="Change Password" description="Change your password" />
      <div className="mt-10">
        <ChangePasswordForm />
      </div>
    </div>
  )
}

