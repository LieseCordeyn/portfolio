class WorksService {
     private readonly url = 'https://api-portfolio-qecb.onrender.com/api'
     //private readonly url ='https://portfolioliesebackend-production.up.railway.app/api'

    public async fetchWorks(){
        const response = await fetch(`${this.url}/projects`)

        return response.json();
    }
}

export const worksService = new WorksService()