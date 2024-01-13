import { ChangePassword, ConnectedAccounts, EmailPreferences, FormProfile, InactiveAccounts } from "../../components"

export const Profile = () => {

  return (
    <>
      {/* Profile */}
      <FormProfile />

      {/* Change password */}
      <ChangePassword />

      {/* Connected accounts */}
      <ConnectedAccounts />

      {/* Email Preferences */}
      <EmailPreferences />

      {/* Ianctive accounts */}
      <InactiveAccounts />
    </>
  )
}
