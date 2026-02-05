import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateCV = () => {
    const [cvForm, setCvForm] = useState({
        name: '', email: '', phone: '', summary: '',
        experience: [{
            company: '',
            position: '',
            startdate: '',
            enddate: '',
            description: '',
        }],
        education: [{
            university: '',
            college: '',
            startdate: '',
            enddate: '',
        }],
        skills: []
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setCvForm((prev) => ({ ...prev, [name]: value }))
    }

    const handleExperience = (index, e) => {
        const { name, value } = e.target
        const updated = [...cvForm.experience]
        updated[index][name] = value
        setCvForm(prev => ({ ...prev, experience: updated }))
    }

    const addExperience = () => {
        setCvForm(prev => ({
            ...prev,
            experience: [...prev.experience, { company: '', position: '', startdate: '', enddate: '', description: '' }]
        }))
    }

    const handleEducationChange = (index, e) => {
        const { name, value } = e.target
        const updated = [...cvForm.education]
        updated[index][name] = value
        setCvForm(prev => ({ ...prev, education: updated }))
    }

    const addEducation = () => {
        setCvForm(prev => ({
            ...prev,
            education: [...prev.education, { university: '', college: '', startdate: '', enddate: '' }]
        }))
    }

    const handleSkillsChange = (e) => {
        setCvForm(prev => ({
            ...prev,
            skills: e.target.value.split(',').map(skill => skill.trim())
        }))
    }

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:5000/cv/create-cv', cvForm)
            alert(res.data.message)
            navigate('/')
        } catch (error) {
            console.error(error.message);
            alert('An error occured')
        }
    }

    return (
        <div>
            <h2>Create your CV</h2>
            <form onSubmit={handleSubmit}>
                <label >Name:</label>
                <input type="text" name='name' onChange={handleChange} value={cvForm.name} placeholder='Name...' required />
                <br />
                <label >Email:</label>
                <input type="email" name='email' onChange={handleChange} value={cvForm.email} placeholder='email...' required />
                <br />
                <label >Phone:</label>
                <input type="tel" name='phone' onChange={handleChange} value={cvForm.phone} placeholder='phone...' required />
                <br />
                <label >Summary:</label>
                <textarea type="text" name='summary' onChange={handleChange} value={cvForm.summary} placeholder='summary...' required />
                <br />

                <h3 >Experience</h3>
                {cvForm.experience.map((exp, index) => (
                    <div key={index}>
                        <h4>Experice #{index + 1}</h4>
                        <label >Company:</label>
                        <input type="text" name='company' onChange={(e) => handleExperience(index, e)} value={exp.company} placeholder='Name...' required />
                        <br />
                        <label >Position:</label>
                        <input type="text" name='position' onChange={(e) => handleExperience(index, e)} value={exp.position} placeholder='Name...' required />
                        <br />
                        <label >start Date:</label>
                        <input type="month" name='startdate' onChange={(e) => handleExperience(index, e)} value={exp.startdate} placeholder='Name...' required />
                        <br />
                        <label >End Date:</label>
                        <input type="month" name='enddate' onChange={(e) => handleExperience(index, e)} value={exp.enddate} placeholder='Name...' required />
                        <br />
                        <label >Description:</label>
                        <textarea type="text" name='description' onChange={(e) => handleExperience(index, e)} value={exp.description} placeholder='summary...' required />
                    </div>
                ))}
                <button type='button' onClick={addExperience}>Add Experience Column</button>

                <h3 >Education</h3>
                {cvForm.education.map((edu, index) => (
                    <div key={index}>
                        <h4>Education #{index + 1}</h4>
                        <label >university:</label>
                        <input type="text" name='university' onChange={(e) => handleEducationChange(index, e)} value={edu.university} placeholder='Name...' required />
                        <br />
                        <label >college:</label>
                        <input type="text" name='college' onChange={(e) => handleEducationChange(index, e)} value={edu.college} placeholder='Name...' required />
                        <br />
                        <label >start Date:</label>
                        <input type="month" name='startdate' onChange={(e) => handleEducationChange(index, e)} value={edu.startdate} placeholder='Name...' required />
                        <br />
                        <label >End Date:</label>
                        <input type="month" name='enddate' onChange={(e) => handleEducationChange(index, e)} value={edu.enddate} placeholder='Name...' required />
                        <br />
                    </div>
                ))}
                <button type='button' onClick={addEducation}>Add Education Column</button>

                <h3>Skills</h3>
                <input type="text" name='skill' onChange={handleSkillsChange} />
                <br />
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default CreateCV