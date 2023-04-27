import PropTypes from 'prop-types';

const Profile = ({ fullName, bio, profession, handleName, children }) => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      border: '1px solid #ddd',
      borderRadius: '5px',
    },
    image: {
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      objectFit: 'cover',
      marginBottom: '20px',
    },
    fullName: {
      fontSize: '30px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    bio: {
      fontSize: '18px',
      marginBottom: '10px',
    },
    profession: {
      fontSize: '20px',
      marginBottom: '20px',
    },
    button: {
      padding: '10px 20px',
      fontSize: '18px',
      fontWeight: 'bold',
      backgroundColor: '#4CAF50',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      {children && <img src={children} alt="Profile" style={styles.image} />}
      <h1 style={styles.fullName}>{fullName}</h1>
      <p style={styles.bio}>{bio}</p>
      <p style={styles.profession}>{profession}</p>
      <button style={styles.button} onClick={handleName}>
        Show Name
      </button>
    </div>
  );
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  handleName: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

Profile.defaultProps = {
  fullName: 'ZAKARIA SAIDI',
  bio: 'Experienced full stack developer with 5+ years of experience in developing web applications using HTML, CSS, JavaScript, Node. js, React. js and MongoDB. Seeking to leverage my skillset and expertise to help XYZ Company achieve their objectives and create innovative solutions.',
  profession: 'developer',
  handleName: () => alert('Hello ZAKARIA SAIDI'),
  children: null,
};

export default Profile;

