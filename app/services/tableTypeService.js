app.factory('tableTypeService', function (utilityService) {

    var global = {};

    global.getTableTypes = function(){
        return[
          {
              type:"custom",
              icon : "ion-ios-list",
              name:"Custom",
              isRenamable: true,
              isEditable: true,
              isDeletable: true,
              maxCount: 9999,
              columns:[{
                  name: 'id',
                  id : utilityService.makeId(),
                  dataType: 'Id',
                  relatedTo: null,
                  relatedToType :null,
                  relationType: null,
                  required: true,
                  unique: true,
                  isRenamable: false,
                  isEditable: false,
                  isDeletable: false,
              },              
              {
                  name: 'createdAt',
                  dataType: 'DateTime',
                  id : utilityService.makeId(),
                  relatedTo: null,
                  relatedToType :null,
                  relationType: null,
                  required: true,
                  unique: false,
                  isRenamable: false,
                  isEditable: false,
                  isDeletable: false,
              },
              {
                  name: 'updatedAt',
                  dataType: 'DateTime',
                  id : utilityService.makeId(),
                  relatedTo: null,
                  relatedToType :null,
                  relationType: null,
                  required: true,
                  unique: false,
                  isRenamable: false,
                  isEditable: false,
                  isDeletable: false,
              },
              {
                  name: 'ACL',
                  dataType: 'ACL',
                  id : utilityService.makeId(),
                  relatedTo: null,
                  relatedToType :null,
                  relationType: null,
                  required: true,
                  unique: false,
                  isRenamable: false,
                  isEditable: false,
                  isDeletable: false,
              },
              {
                  name: 'expires',
                  dataType: 'DateTime',
                  id : utilityService.makeId(),
                  relatedTo: null,
                  relatedToType :null,
                  relationType: null,
                  required: true,
                  unique: false,
                  isRenamable: false,
                  isEditable: false,
                  isDeletable: false,
              }]
          },
          {
              type:"user",
              icon : "ion-person-stalker",
              name:"User",
              isRenamable: false,
              isEditable: true,
              isDeletable: true,
              maxCount: 1,
              columns:[{
                  name: 'id',
                  dataType: 'Id',
                  id : utilityService.makeId(),
                  relatedTo: null,
                  relatedToType :null,
                  relationType: null,
                  required: true,
                  unique: true,
                  isRenamable: false,
                  isEditable: false,
                  isDeletable: false,
              },
              {
                  name: 'username',
                  dataType: 'Text',
                  relatedTo: null,
                  id : utilityService.makeId(),
                  relatedToType :null,
                  relationType: null,
                  required: true,
                  unique: true,
                  isRenamable: false,
                  isEditable: false,
                  isDeletable: false,
              },
              {
                  name: 'email',
                  dataType: 'Email',
                  relatedTo: null,
                  id : utilityService.makeId(),
                  relatedToType :null,
                  relationType: null,
                  required: false,
                  unique: true,
                  isRenamable: false,
                  isEditable: false,
                  isDeletable: false,
              },
              {
                  name: 'password',
                  dataType: 'Password',
                  id : utilityService.makeId(),
                  relatedTo: null,
                  relatedToType :null,
                  relationType: null,
                  required: true,
                  unique: false,
                  isRenamable: false,
                  isEditable: false,
                  isDeletable: false,
              },
              {
                  name: 'roles',
                  dataType: 'List',
                  relatedTo:null, 
                  id : utilityService.makeId(),
                  relatedToType :'role',                 
                  relationType: 'table', 
                  required: false,
                  unique: false,
                  isRenamable: false,
                  isEditable: false,
                  isDeletable: false,
              },              
              {
                  name: 'createdAt',
                  dataType: 'DateTime',
                  relatedTo: null,
                  id : utilityService.makeId(),
                  relatedToType :null,
                  relationType: null,
                  required: true,
                  unique: false,
                  isRenamable: false,
                  isEditable: false,
                  isDeletable: false,
              },
              {
                  name: 'updatedAt',
                  dataType: 'DateTime',
                  relatedTo: null,
                  id : utilityService.makeId(),
                  relatedToType :null,
                  relationType: null,
                  required: true,
                  unique: false,
                  isRenamable: false,
                  isEditable: false,
                  isDeletable: false,
              },
              {
                  name: 'ACL',
                  dataType: 'ACL',
                  relatedTo: null,
                  id : utilityService.makeId(),
                  relatedToType :null,
                  relationType: null,
                  required: true,
                  unique: false,
                  isRenamable: false,
                  isEditable: false,
                  isDeletable: false,
              },
              {
                  name: 'expires',
                  dataType: 'DateTime',
                  id : utilityService.makeId(),
                  relatedTo: null,
                  relatedToType :null,
                  relationType: null,
                  required: true,
                  unique: false,
                  isRenamable: false,
                  isEditable: false,
                  isDeletable: false,
              }]
          },
          {
              type:"role",
              icon : "ion-unlocked",
              name:"Role",
              isRenamable: false,
              isEditable: true,
              isDeletable: true,
              maxCount: 1,
              columns:[{
                  name: 'id',
                  dataType: 'Id',
                  relatedTo: null,
                  relatedToType :null,
                  id : utilityService.makeId(),
                  relationType: null,
                  required: true,
                  unique: true,
                  isRenamable: false,
                  isEditable: false,
                  isDeletable: false,
              },
              {
                  name: 'name',
                  dataType: 'Text',
                  relatedTo: null,
                  relatedToType :null,
                  id : utilityService.makeId(),
                  relationType: null,
                  required: true,
                  unique: true,
                  isRenamable: false,
                  isEditable: false,
                  isDeletable: false,
              },              
              {
                  name: 'createdAt',
                  dataType: 'DateTime',
                  relatedTo: null,
                  relatedToType :null,
                  relationType: null,
                  id : utilityService.makeId(),
                  required: true,
                  unique: false,
                  isRenamable: false,
                  isEditable: false,
                  isDeletable: false,
              },
              {
                  name: 'updatedAt',
                  dataType: 'DateTime',
                  relatedTo: null,
                  relatedToType :null,
                  relationType: null,
                  id : utilityService.makeId(),
                  required: true,
                  unique: false,
                  isRenamable: false,
                  isEditable: false,
                  isDeletable: false,
              },
              {
                  name: 'ACL',
                  dataType: 'ACL',
                  relatedTo: null,
                  relatedToType :null,
                  relationType: null,
                  id : utilityService.makeId(),
                  required: true,
                  unique: false,
                  isRenamable: false,
                  isEditable: false,
                  isDeletable: false,
              },
              {
                  name: 'expires',
                  dataType: 'DateTime',
                  id : utilityService.makeId(),
                  relatedTo: null,
                  relatedToType :null,
                  relationType: null,
                  required: true,
                  unique: false,
                  isRenamable: false,
                  isEditable: false,
                  isDeletable: false,
              }]
          }


        ];

    };

    return global;
});
