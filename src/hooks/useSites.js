import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'kdbase_sites_local'

const DEFAULT_DEMO_SITES = []

// Helper konversi file gambar ke Base64 (untuk penyimpanan lokal)
const fileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })

export function useSites() {
  const [sites, setSites] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // 1. Fetch data dari LocalStorage
  const fetchSites = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const localData = localStorage.getItem(STORAGE_KEY)
      if (localData) {
        setSites(JSON.parse(localData))
      } else {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_DEMO_SITES))
        setSites(DEFAULT_DEMO_SITES)
      }
    } catch (err) {
      console.error('Gagal membaca data lokal:', err)
      setError(err.message)
      setSites(DEFAULT_DEMO_SITES)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchSites()
  }, [fetchSites])

  // Helper upload image (Base64 lokal)
  const uploadImage = async (file) => {
    if (!file) return null
    return await fileToBase64(file)
  }

  // 2. Tambah Site Baru
  const addSite = async (newSiteData, imageFile) => {
    try {
      let imageUrl = newSiteData.image_url || null
      if (imageFile) {
        imageUrl = await uploadImage(imageFile)
      }

      const localItem = {
        id: `site-${Date.now()}`,
        company_name: newSiteData.company_name.trim(),
        address: newSiteData.address.trim(),
        pic_name: newSiteData.pic_name.trim(),
        pic_phone: newSiteData.pic_phone.trim(),
        status: newSiteData.status || 'Pending',
        notes: newSiteData.notes ? newSiteData.notes.trim() : '',
        image_url: imageUrl,
        created_at: new Date().toISOString()
      }

      setSites((prev) => {
        const updated = [localItem, ...prev]
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
        return updated
      })
      return { success: true, data: localItem }
    } catch (err) {
      console.error('Error saat menambah site:', err)
      return { success: false, error: err.message }
    }
  }

  // 3. Update Status Cepat (dari Tabel / Preview)
  const updateStatus = async (id, newStatus) => {
    try {
      setSites((prev) => {
        const updated = prev.map((item) =>
          item.id === id
            ? { ...item, status: newStatus, updated_at: new Date().toISOString() }
            : item
        )
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
        return updated
      })
      return { success: true }
    } catch (err) {
      console.error('Error update status:', err)
      return { success: false, error: err.message }
    }
  }

  // 4. Update Seluruh Data Site
  const updateSite = async (id, updatedFields, newImageFile) => {
    try {
      let imageUrl = updatedFields.image_url
      if (newImageFile) {
        imageUrl = await uploadImage(newImageFile)
      }

      const payload = {
        ...updatedFields,
        image_url: imageUrl,
        updated_at: new Date().toISOString()
      }

      setSites((prev) => {
        const updated = prev.map((item) =>
          item.id === id ? { ...item, ...payload } : item
        )
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
        return updated
      })
      return { success: true }
    } catch (err) {
      console.error('Error update site:', err)
      return { success: false, error: err.message }
    }
  }

  // 5. Hapus Site
  const deleteSite = async (id) => {
    try {
      setSites((prev) => {
        const updated = prev.filter((item) => item.id !== id)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
        return updated
      })
      return { success: true }
    } catch (err) {
      console.error('Error delete site:', err)
      return { success: false, error: err.message }
    }
  }

  return {
    sites,
    loading,
    error,
    fetchSites,
    addSite,
    updateSite,
    updateStatus,
    deleteSite
  }
}

