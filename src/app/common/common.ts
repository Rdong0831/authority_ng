// 檢查是否有資料
export function checkData(data: any[]) {
  if (!data) {
    return false
  }
  return data.length > 0;
}
