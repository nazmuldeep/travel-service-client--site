import React, { useState } from 'react';
import useTitle from '../../Hooks/useTitle';

const AddService = () => {
    useTitle('Add Service')
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}/${current.toLocaleTimeString()}`
    const [addService, setAddService] = useState({ time: date })


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        fetch('https://assignment-server-11-taupe.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                form.reset()
            })
    }
    const handleInputBlur = event => {
        const FieldName = event.target.name;
        const FieldValue = event.target.value;
        console.log(FieldName, FieldValue);
        const newUser = { ...addService };
        newUser[FieldName] = FieldValue;
        setAddService(newUser);

    }
    return (
        <div className="hero  min-h-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-rose-400 via-fuchsia-500 to-indigo-500">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-orange-200">
                    <form onSubmit={handleSubmit} className="card-body">
                        <h1 className="text-5xl text-white font-bold">Add Service</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">photo Url</span>
                            </label>
                            <input onBlur={handleInputBlur} type="text" name='photoUrl' placeholder="PhotoUrl" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input onBlur={handleInputBlur} type="name" placeholder="Description" name="Description" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input onBlur={handleInputBlur} type="text" name='Location' placeholder="Location" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">rating</span>
                            </label>
                            <input onBlur={handleInputBlur} type="number" placeholder="rating" name='rating' className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Add Service</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;