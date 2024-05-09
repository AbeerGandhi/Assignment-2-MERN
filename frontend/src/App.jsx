// import React, { useState, useEffect } from 'react';
// import ProtectedPage from './components/ProtectedPage'; 

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isSignUp, setIsSignUp] = useState(true);
//   const [signedUpUsers, setSignedUpUsers] = useState([]);

//   useEffect(() => {
//     if (!isSignUp) {
//       setEmail('');
//       setPassword('');
//       setError('');
//     }
//   }, [isSignUp]);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const user = signedUpUsers.find((u) => u.email === email && u.password === password);
//     if (user) {
//       setIsLoggedIn(true);
//       setEmail('');
//       setPassword('');
//       setError('');
//     } else {
//       setError('Invalid credentials');
//     }
//   };

//   const handleSignUp = (e) => {
//     e.preventDefault();
    
//     if (email && password) {
//       setSignedUpUsers([...signedUpUsers, { email, password }]);
//       setIsSignUp(false);
//     } else {
//       setError('Please enter both email and password');
//     }
//   };

//   const handleLoginClick = () => {
//     setIsSignUp(true);
    
//     setEmail('');
//     setPassword('');
//     setError('');
//     setIsLoggedIn(false);
//   };

//   return (
//     <div style={styles.outerContainer}>
//       <div style={styles.container}>
//         {!isLoggedIn ? (
//           <>
//              {<h1 style={{ ...styles.heading, padding: '10px' }}>Welcome to Our Blog Website!</h1>}
//              {<p style={{ marginBottom: '100px', marginTop:'10px  ' }} > New to our page? No worries!</p>}
//             {isSignUp ? (
//               <>
//                 <h2 style={styles.heading}>Sign Up</h2>
//                 <form onSubmit={handleSignUp}>
//                   <table style={styles.table}>
//                     <tbody>
//                       <tr style={styles.row}>
//                         <td style={styles.cell}><label htmlFor="email">Email:</label></td>
//                         <td style={styles.cell}><input
//                           type="email"
//                           id="email"
//                           value={email}
//                           onChange={(e) => setEmail(e.target.value)}
//                           style={styles.input}
//                           placeholder="Enter your email"
//                         /></td>
//                       </tr>
//                       <tr style={styles.row}>
//                         <td style={styles.cell}><label htmlFor="password">Password:</label></td>
//                         <td style={styles.cell}><input
//                           type="password"
//                           id="password"
//                           value={password}
//                           onChange={(e) => setPassword(e.target.value)}
//                           style={styles.input}
//                           placeholder="Enter your password"
//                         /></td>
//                       </tr>
//                       <tr>
//                         <td colSpan="2" style={styles.error}>{error && <div>{error}</div>}</td>
//                       </tr>
//                       <tr style={styles.row}>
//                         <td colSpan="2" style={{ textAlign: 'center', padding: '10px' }}>
//                           <button type="submit" style={styles.button}>Sign Up</button>
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </form>
//               </>
//             ) : (
//               <>
//                 <h2 style={styles.heading}>Login</h2>
//                 <form onSubmit={handleLogin}>
//                   <table style={styles.table}>
//                     <tbody>
//                       <tr style={styles.row}>
//                         <td style={styles.cell}><label htmlFor="email">Email:</label></td>
//                         <td style={styles.cell}><input
//                           type="email"
//                           id="email"
//                           value={email}
//                           onChange={(e) => setEmail(e.target.value)}
//                           style={styles.input}
//                           placeholder="Enter your email"
//                         /></td>
//                       </tr>
//                       <tr style={styles.row}>
//                         <td style={styles.cell}><label htmlFor="password">Password:</label></td>
//                         <td style={styles.cell}><input
//                           type="password"
//                           id="password"
//                           value={password}
//                           onChange={(e) => setPassword(e.target.value)}
//                           style={styles.input}
//                           placeholder="Enter your password"
//                         /></td>
//                       </tr>
//                       <tr>
//                         <td colSpan="2" style={styles.error}>{error && <div>{error}</div>}</td>
//                       </tr>
//                       <tr style={styles.row}>
//                         <td colSpan="2" style={{ textAlign: 'center', padding: '10px' }}>
//                           <button type="submit" style={styles.button}>Login</button>
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </form>
//               </>
//             )}
//           </>
//         ) : (
//           <ProtectedPage />
//         )}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   outerContainer: {
//     backgroundColor: '#FFFDD0',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     minHeight: '100vh', 
//   },
//   container: {
//     maxWidth: '400px',
//     margin: '0 auto',
//     padding: '20px',
//     borderRadius: '5px',
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//     backgroundColor: '#fff',
//   },
//   heading: {
//     textAlign: 'center',
//     marginBottom: '20px',
//     fontSize: '24px',
//     color: '#333',
//   },
//   table: {
//     width: '100%',
//     borderCollapse: 'collapse',
//   },
//   row: {
//     backgroundColor: '#f5f5f5',
//   },
//   cell: {
//     padding: '10px',
//   },
//   input: {
//     width: '100%',
//     padding: '10px',
//     borderRadius: '5px',
//     border: '1px solid #ccc',
//     boxSizing: 'border-box',
//     marginBottom: '10px',
//   },
//   error: {
//     color: 'red',
//     textAlign: 'center',
//     marginBottom: '10px',
//   },
//   button: {
//     padding: '10px 20px',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//   },
// };

// export default LoginForm;
import React, { useState, useEffect } from 'react';
import ProtectedPage from './components/ProtectedPage'; 

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const [signedUpUsers, setSignedUpUsers] = useState([]);

  useEffect(() => {
    if (!isSignUp) {
      setEmail('');
      setPassword('');
      setError('');
    }
  }, [isSignUp]);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = signedUpUsers.find((u) => u.email === email && u.password === password);
    if (user) {
      setIsLoggedIn(true);
      setEmail('');
      setPassword('');
      setError('');
    } else {
      setError('Invalid credentials');
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    
    if (email && password) {
      setSignedUpUsers([...signedUpUsers, { email, password }]);
      setIsSignUp(false);
    } else {
      setError('Please enter both email and password');
    }
  };

  const handleLoginClick = () => {
    setIsSignUp(true);
    
    setEmail('');
    setPassword('');
    setError('');
    setIsLoggedIn(false);
  };

  return (
    <div style={styles.outerContainer}>
      <div style={styles.container}>
        {!isLoggedIn ? (
          <>
             {<h1 style={{ ...styles.heading, padding: '10px' }}>Welcome to Our Blog Website!</h1>}
            {isSignUp ?  (
              <>
                <h2 style={styles.heading}>Sign Up</h2>
                <form onSubmit={handleSignUp}>
                  <table style={styles.table}>
                    <tbody>
                      <tr style={styles.row}>
                        <td style={styles.cell}><label htmlFor="email">Email:</label></td>
                        <td style={styles.cell}><input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          style={styles.input}
                          placeholder="Enter your email"
                        /></td>
                      </tr>
                      <tr style={styles.row}>
                        <td style={styles.cell}><label htmlFor="password">Password:</label></td>
                        <td style={styles.cell}><input
                          type="password"
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          style={styles.input}
                          placeholder="Enter your password"
                        /></td>
                      </tr>
                      <tr>
                        <td colSpan="2" style={styles.error}>{error && <div>{error}</div>}</td>
                      </tr>
                      <tr style={styles.row}>
                        <td colSpan="2" style={{ textAlign: 'center', padding: '10px' }}>
                          <button type="submit" style={styles.button}>Sign Up</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </form>
              </>
            ) : (
              <>
                <h2 style={styles.heading}>Login</h2>
                <form onSubmit={handleLogin}>
                  <table style={styles.table}>
                    <tbody>
                      <tr style={styles.row}>
                        <td style={styles.cell}><label htmlFor="email">Email:</label></td>
                        <td style={styles.cell}><input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          style={styles.input}
                          placeholder="Enter your email"
                        /></td>
                      </tr>
                      <tr style={styles.row}>
                        <td style={styles.cell}><label htmlFor="password">Password:</label></td>
                        <td style={styles.cell}><input
                          type="password"
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          style={styles.input}
                          placeholder="Enter your password"
                        /></td>
                      </tr>
                      <tr>
                        <td colSpan="2" style={styles.error}>{error && <div>{error}</div>}</td>
                      </tr>
                      <tr style={styles.row}>
                        <td colSpan="2" style={{ textAlign: 'center', padding: '10px' }}>
                          <button type="submit" style={styles.button}>Login</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </form>
              </>
            )}
          </>
        ) : (
          <ProtectedPage />
        )}
      </div>
    </div>
  );
};

const styles = {
  outerContainer: {
    backgroundImage: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)', // Background gradient
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh', 
  },
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    color: '#333',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  row: {
    backgroundColor: '#f5f5f5',
  },
  cell: {
    padding: '10px',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    marginBottom: '10px',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: '10px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default LoginForm;
