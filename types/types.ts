export interface RTKUserState {
  status: string;
  userProfile: Record<string, any>;
  FirstName: string;
  LastName: string;
  token: string | null;
  localToken: string | null;
  errorMessage: string;
  successMessage: string;
  changePhoneNumber: boolean;
  PhoneNumber: string | null;
  email: string;
  PhoneNumberInput: boolean;
  showModal: boolean;
  autoFocus: boolean;
  isLoggedIn: boolean;
  welcomeMessage: string;
  userId: string;
  userType: userRoleType[];
  type: string;
  numberOfAnnouncements: number;
  role: string;
  errorOnProfileHandler: boolean;
}

export type userRoleType = {
  created_at: string;
  deleted_at: string;
  updated_at: string;
  id: number;
  name_en: string;
  name_fa: string;
  pivot: { user_id: number; role_id: number };
};

export interface RootState {
  userData: RTKUserState; // Change this to match your overall state shape
}

export type fetchUserInLoginWithPasswordPayload = {
  mobile: string;
  password: string;
};
export type fetchUserInOTPLoginPayload = {
  mobile: string;
};
export type verifyUserByOTPInLoginAndRegistrationPayload = {
  mobile: string;
  otp_code: string;
};
export type sendOTPCodeAfterRegistrationPayload = {
  name: string;
  surname: string;
  type: string;
  mobile: string;
  org_name: string;
  org_registration_number: string;
  org_address: string;
  org_phone: string;
};
