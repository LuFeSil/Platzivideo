import md5 from 'md5';

const gravatar = (email) => {
    const base = 'http://gravatar.com/avatar/';
    const formtattedEmail = (email).trim().toLowerCase();
    const hash = md5(formtattedEmail, { encoding: "binary" });
    return `${base}${hash}`
}

export default gravatar;