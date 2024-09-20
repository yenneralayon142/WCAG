import { useState } from 'react'
import { searchUrlsDomain } from '../../services/urlsDomain'

export function useDomainUrls () {
    const[domainUrls, setDomainUrls] = useState([])

    const getDomainUrls = async (domain) => {
        const newDomainUrls = await searchUrlsDomain(domain)
        setDomainUrls(newDomainUrls) 
    }

    return {domainUrls,getDomainUrls}
}