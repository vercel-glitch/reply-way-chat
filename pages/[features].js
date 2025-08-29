import React from 'react'
import FeaturesPageLayout from '../components/common/FeaturesPageLayout'
import { featuresPagesData, getAllFeatureSlugs, getFeatureDataBySlug, generatePlaceholderFeatureData } from '../src/data/featuresPages'
import { useRouter } from 'next/router'

export default function InstantMessaging() {
  const router = useRouter()
  const { features } = router.query
  const validSlugs = getAllFeatureSlugs()
  const filter = validSlugs.includes(features) ? features : 'online-meetings'
  
  // Get page data - use existing data if available, otherwise generate placeholder
  let pageData = featuresPagesData[filter]
  
  if (!pageData) {
    // Generate placeholder data for features that don't have specific content
    const featureInfo = getFeatureDataBySlug(filter)
    if (featureInfo) {
      pageData = generatePlaceholderFeatureData(filter, featureInfo.name)
    } else {
      // Fallback to online-meetings if feature not found
      pageData = featuresPagesData['online-meetings']
    }
  }
  
  return (
    <FeaturesPageLayout sections={pageData?.sections} theme="green" />
  )
} 