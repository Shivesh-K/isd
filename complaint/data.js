const complaints = [
    {
        id: 1,
        title: "Bad Food",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus maximus tincidunt. Quisque malesuada scelerisque dolor a porta. Etiam mi nisl, placerat sed pulvinar at, egestas quis nunc. Aenean et lectus ullamcorper, posuere nulla a, consequat eros. Nulla vel justo convallis, lobortis ante quis, ornare ipsum. Maecenas pulvinar dui nisi, vitae mollis nulla sagittis porta. Ut congue eget est molestie rhoncus. In hac habitasse platea dictumst. Sed tincidunt vulputate orci, eu congue augue aliquam ac. Proin in dui tincidunt nibh pulvinar tempus. Nam est erat, rutrum ut risus non, finibus fermentum magna. Duis nec leo congue erat malesuada dignissim. Phasellus tempus scelerisque tortor, vel malesuada lectus sodales non. Suspendisse ut volutpat dolor, finibus porttitor elit. Etiam a ornare eros. ",
        author: "Shivesh Kaundinya",
        status: "Pending",
        comments: "--"
    }, {
        id: 2,
        title: "Bad Food",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus maximus tincidunt. Quisque malesuada scelerisque dolor a porta. Etiam mi nisl, placerat sed pulvinar at, egestas quis nunc. Aenean et lectus ullamcorper, posuere nulla a, consequat eros. Nulla vel justo convallis, lobortis ante quis, ornare ipsum. Maecenas pulvinar dui nisi, vitae mollis nulla sagittis porta. Ut congue eget est molestie rhoncus. In hac habitasse platea dictumst. Sed tincidunt vulputate orci, eu congue augue aliquam ac. Proin in dui tincidunt nibh pulvinar tempus. Nam est erat, rutrum ut risus non, finibus fermentum magna. Duis nec leo congue erat malesuada dignissim. Phasellus tempus scelerisque tortor, vel malesuada lectus sodales non. Suspendisse ut volutpat dolor, finibus porttitor elit. Etiam a ornare eros. ",
        author: "Shivesh Kaundinya",
        status: "Pending",
        comments: "--"
    }, {
        id: 3,
        title: "Bad Food",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus maximus tincidunt. Quisque malesuada scelerisque dolor a porta. Etiam mi nisl, placerat sed pulvinar at, egestas quis nunc. Aenean et lectus ullamcorper, posuere nulla a, consequat eros. Nulla vel justo convallis, lobortis ante quis, ornare ipsum. Maecenas pulvinar dui nisi, vitae mollis nulla sagittis porta. Ut congue eget est molestie rhoncus. In hac habitasse platea dictumst. Sed tincidunt vulputate orci, eu congue augue aliquam ac. Proin in dui tincidunt nibh pulvinar tempus. Nam est erat, rutrum ut risus non, finibus fermentum magna. Duis nec leo congue erat malesuada dignissim. Phasellus tempus scelerisque tortor, vel malesuada lectus sodales non. Suspendisse ut volutpat dolor, finibus porttitor elit. Etiam a ornare eros. ",
        author: "Shivesh Kaundinya",
        status: "Pending",
        comments: "--"
    }, {
        id: 4,
        title: "Bad Food",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus maximus tincidunt. Quisque malesuada scelerisque dolor a porta. Etiam mi nisl, placerat sed pulvinar at, egestas quis nunc. Aenean et lectus ullamcorper, posuere nulla a, consequat eros. Nulla vel justo convallis, lobortis ante quis, ornare ipsum. Maecenas pulvinar dui nisi, vitae mollis nulla sagittis porta. Ut congue eget est molestie rhoncus. In hac habitasse platea dictumst. Sed tincidunt vulputate orci, eu congue augue aliquam ac. Proin in dui tincidunt nibh pulvinar tempus. Nam est erat, rutrum ut risus non, finibus fermentum magna. Duis nec leo congue erat malesuada dignissim. Phasellus tempus scelerisque tortor, vel malesuada lectus sodales non. Suspendisse ut volutpat dolor, finibus porttitor elit. Etiam a ornare eros. ",
        author: "Shivesh Kaundinya",
        status: "Pending",
        comments: "--"
    }, {
        id: 5,
        title: "Bad Food",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus maximus tincidunt. Quisque malesuada scelerisque dolor a porta. Etiam mi nisl, placerat sed pulvinar at, egestas quis nunc. Aenean et lectus ullamcorper, posuere nulla a, consequat eros. Nulla vel justo convallis, lobortis ante quis, ornare ipsum. Maecenas pulvinar dui nisi, vitae mollis nulla sagittis porta. Ut congue eget est molestie rhoncus. In hac habitasse platea dictumst. Sed tincidunt vulputate orci, eu congue augue aliquam ac. Proin in dui tincidunt nibh pulvinar tempus. Nam est erat, rutrum ut risus non, finibus fermentum magna. Duis nec leo congue erat malesuada dignissim. Phasellus tempus scelerisque tortor, vel malesuada lectus sodales non. Suspendisse ut volutpat dolor, finibus porttitor elit. Etiam a ornare eros. ",
        author: "Shivesh Kaundinya",
        status: "Pending",
        comments: "--"
    },
];

const getAllComplaints = () => complaints;
const getComplaints = (author) => complaints.filter(complaint => complaint.author === author);
const updateComplaint = (id, data) => complaints[id] = data;
const addComplaint = (data) => complaints.push({ id: complaints.size + 1, ...data });
const setComplaintStatus = (id, status) => complaints[id].status = status;

export { getAllComplaints, getComplaints, updateComplaint, addComplaint, setComplaintStatus };


