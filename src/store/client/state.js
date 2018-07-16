export default {
  title: `Thông Tin Khách Hàng`,
  isLoading: false,
  isModalOpened: false,
  editingRec: {},
  backupRec: {},
  selected: [],
  recs: [],
  cols: [
    {
      name: 'edit',
      align: 'left',
      field: 'edit',
      width: '34px',
    },
    {
      name: 'code',
      label: 'Mã Khách Hàng',
      align: 'left',
      field: 'code',
      sortable: true,
    },
    {
      name: 'name',
      label: 'Tên Khách Hàng',
      align: 'left',
      field: 'name',
      sortable: true,
    },
    {
      name: 'address',
      label: 'Địa Chỉ',
      align: 'left',
      field: 'address',
      sortable: true,
    },
    {
      name: 'phone',
      label: 'Số Điện Thoại',
      align: 'left',
      field: 'phone',
      sortable: true,
    },
  ],
  fields: [
    {
      name: 'id',
      hidden: true,
    },
    {
      name: 'code',
      label: 'Mã Khách Hàng',
      type: 'text',
      icon: 'outlined_flag',
    },
    {
      name: 'name',
      label: 'Tên Khách Hàng',
      type: 'text',
      icon: 'person',
    },
    {
      name: 'address',
      label: 'Địa Chỉ',
      type: 'text',
      icon: 'place',
    },
    {
      name: 'phone',
      label: 'Số Điện Thoại',
      type: 'number',
      icon: 'phone',
    },
  ],
}