import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ViewCV = () => {
    const [cvs, setCvs] = useState([])
    const navigate = useNavigate()

    const fetchCv = async () => {
        try {
            const response = await axios(`${import.meta.env.VITE_HOST_URL}/cv/view-cv`)
            if (response.status === 200) {
                setCvs(response.data.fetchedCVs)
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        fetchCv()
    }, [])

    return (
        <div>
            <button onClick={() => navigate('/create-a-cv')}>Create a CV</button>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Created on</td>
                    </tr>
                </thead>
                <tbody>
                    {cvs.map((cv) =>
                        <tr key={cv.id}>
                            <td>{cv.name}</td>
                            <td>{cv.email}</td>
                            <td>{new Date(cv.createdAt).toLocaleDateString()}</td>
                            <td><button onClick={() => navigate('/preview', { state: { cvData: cv } })}>Generate CV</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ViewCV