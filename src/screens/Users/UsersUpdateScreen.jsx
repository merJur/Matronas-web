
/*

import React from 'react';

const UsersUpdateScreen = () => {
    const [user, setUser] = useState({ email: '', name: ''}) 
  const { id } = useParams()

  useEffect(() => {
    if (edit) {
      getUserDetail(id)
      .then(user => setUser(user))
    }
  }, [id, edit])

  const handleOnChange = (event) => {
    const { name, value } = event.target
    setUser({
      ...user, 
      [name]: value
    })
   }

   const onSubmit = (event) => {
    event.preventDefault()

    if(edit) {
      updateUser(id, user).then(user => console.log(user))
    } else {
      createUser(user).then(user => console.log(user))
    }
   }
console.log('....................', user);
    return (
        <div>
            
        </div>
    );
};

export default UsersUpdateScreen;



*/
