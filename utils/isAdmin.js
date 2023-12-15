// Checks if the logged in user is the admin or not
export const isAdmin = (givenID) => {
    return (process.env.NEXT_PUBLIC_ADMIN_ID === givenID);
}