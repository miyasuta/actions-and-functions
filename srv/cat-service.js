module.exports = async function () {
    //bound actions /functions
    this.on('boundActionWithParam', 'Books', req => {
        return {
            message: 'This is bound action with parameters!',
            id: req.params[0],
            param1:  req.data.param1,
            param2:  req.data.param2,
        }
    })

    this.on('boundActionWithoutParam', 'Books', req => {
        return {
            message: 'This is bound action without parameters!',
            id: req.params[0]
        }        
    })
    
    this.on('boundFunctionWithParam', 'Books', req => {    
        return {
            message: 'This is bound function with parameters!',
            id:  req.params[0],
            param1: req.data.param1,
            param2: req.data.param2
        }
    })
    
    this.on('boundFunctionWithoutParam', 'Books', req => {
        return {
            message: 'This is bound function without parameters!',
            id: req.params[0]
        }        
    })   
    
    //unbound actions / functions
    this.on('unboundActionWithParam', req => {
        return {
            message: 'This is unbound action with parameters!',
            param1: req.data.param1,
            param2: req.data.param2
        }
    })   
    
    this.on('unboundActionWithoutParam', req => {
        return {
            message: 'This is unbound action without parameters!',
        }
    })   
    
    this.on('unboundFunctionWithParam', req => {
        return {
            message: 'This is unbound function with parameters!',
            param1: req.data.param1,
            param2: req.data.param2
        }
    }) 
    
    this.on('unboundFunctionWithoutParam', req => {
        return {
            message: 'This is unbound function without parameters!'
        }
    })     
}