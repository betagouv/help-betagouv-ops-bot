const helper = require('../services/helper')
// const IN_MEMORY_DB = require('../services/inmemory').IN_MEMORY_DB

async function jobs(ctx, job_id) {
    try {
        const r = helper.getJobInfo(job_id)

        resp = "\n``` json\n"
        resp += JSON.stringify(r)
        resp += "\n```\n"

        return `Result: ${resp}`

    } catch(e) {
        console.log(`betaservices jobs connectionerror: ` + e)
        return `:confused: Oups, une erreur s'est produite`
    }
}

module.exports = {
    jobs
}
