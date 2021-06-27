import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="text-center" style={{backgroundColor:'#ddd'}}>
            <p style={{marginBottom:'opx'}} className="py-3">Copyright &copy; {currentYear} @ <a href="https://mdnakibul.netlify.app">Md Nakibul Hosen Nahid</a></p>
        </footer>
    );
};

export default Footer;