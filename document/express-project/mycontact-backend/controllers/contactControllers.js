//@desc Get all contacts
//@route Get /api/contacts
//@access public

const getContact= (req,res)=>{
    res.status(200).json({message:"get All contacts"})
};

//@desc Create new contacts
//@route POST /api/contacts
//@access public

const createContact= (req,res)=>{
    console.log("Request body is:",req.body);
    const {name,email,}
    res.status(201).json({message:"Create contacts"})
};
//@desc Get contacts
//@route GET /api/contacts/:id
//@access public

const getContacts= (req,res)=>{
    res.status(200).json({message:`Get contacts ${req.params.id}`})
};
//@desc Update contacts
//@route PUT /api/contacts/:id
//@access public

const updateContact= (req,res)=>{
    res.status(200).json({message:`Update contacts ${req.params.id}`})
};
//@desc Delete contacts
//@route DELETE /api/contacts/:id
//@access public

const deleteContact= (req,res)=>{
    res.status(200).json({message:`Delete contacts ${req.params.id}`})
};

module.exports = {
    getContact, 
    createContact, 
    getContacts, 
    updateContact, 
    deleteContact
};

