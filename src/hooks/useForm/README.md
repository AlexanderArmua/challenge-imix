# useForm Hook

Example 1:
```js
    const [form, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = form;

    return (
        <form>
            <input 
                type='text'
                name='name'
                value={name}
                onChange={handleInputChange}
            />
        <form/>
    )
```
