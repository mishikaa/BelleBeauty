const AdminID = '6576ec0789270096048bc42e';

// Checks if the logged in user is the admin or not
export const isAdmin = (givenID) => {
    // const AdminID = process.env.ADMIN_ID || '';
    return (AdminID === givenID);
}