
export enum UserRole {
    Admin = 'Admin',
    Teacher = 'Teacher',
    Student = 'Student',
    Accountant = 'Accountant',
    Staff = 'Staff',
}

export type TUsers = {
    username: string;
    email: string;
    password: string;
    role: UserRole;
}
