import banner_doctors from './banner_doctors.png'
import group_profile from './group_profile.png'
import logo from './logo.png'
import rightArrow from './right-arrow.svg'
import General_Physician from './General_Physician.png'
import Gynecologist from './Gynecologist.png'
import Dermatologist from './Dermatologist.png'
import Pediatricians from './Pediatricians.png'
import Neurologist from './Neurologist.png'
import Gastroenterologist from './Gastroenterologist.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import rightBanner from './right_banner.png'

export const assets = {
    banner_doctors,
    group_profile,
    logo,
    rightArrow,
    rightBanner
}

export const specialityData = [
    {
        speciality: 'General Physician',
        image: General_Physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Richard James',
        image: doc1,
        speciality: 'General Physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care',
        fees: 50,
        adderess: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        avilable: true 
    },
    {
        _id: 'doc2',
        name: 'Dr. Emily Larson',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Emily has a strong commitment to delivering comprehensive medical care',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        avilable: true
    },
       {
        _id: 'doc3',
        name: 'Dr. Sarah Patel',
        image: 'doc3',
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care',
        fees: 30,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        avilable: false
    },
           {
        _id: 'doc4',
        name: 'Dr. New',
        image: doc1,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care',
        fees: 30,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        avilable: true
    }
]