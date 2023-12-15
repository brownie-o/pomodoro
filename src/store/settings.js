import { defineStore } from 'pinia'

// defineStore(資料名稱) 定義保存資料名稱
export const useSettingsStore = defineStore('settings', {
  // () => ({}) 包一層小括號 = 表示{}是物件的意思 => return
  state: () => ({
    alarms: [
      // new URL().href => 要在js用到assets內的檔案時使用
      { id: 1, name: '鬧鐘', file: new URL('@/assets/alarm.mp3', import.meta.url).href },
      { id: 2, name: 'Yay', file: new URL('@/assets/yay.mp3', import.meta.url).href }
    ],
    // 被選擇的鈴聲是第幾個
    selectedAlarm: 1,
    // 預設通知開啟
    notify: true
  }),
  getters: {
    selectedAlarmFile () {
      // 每個東西執行findIndex() function, 找出id
      const i = this.alarms.findIndex(alarm => alarm.id === this.selectedAlarm)
      return this.alarms[i].file
    }
  },
  persist: {
    key: 'pomodoro-settings',
    paths: [
      'selectedAlarm', 'notify'
    ]
  }
})
