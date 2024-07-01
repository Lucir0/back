
export const generateRandomPassword = (): string => {
    const length = 10; 
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomPassword = '';
  
    for (let i = 0; i < length; i++) {
      randomPassword += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    return randomPassword;
  };
  