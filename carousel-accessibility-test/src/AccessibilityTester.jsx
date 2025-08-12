import React, { useState } from 'react';
import './AccessibilityTester.css';

const AccessibilityTester = () => {
  const [testResults, setTestResults] = useState({
    keyboard: {
      tabNavigation: null,
      enterActivation: null,
      arrowKeys: null,
      escapeKey: null
    },
    screenReader: {
      slideAnnouncements: null,
      buttonLabels: null,
      currentSlideInfo: null,
      navigationInstructions: null
    },
    focus: {
      visibleFocusIndicators: null,
      logicalFocusOrder: null,
      focusTrapping: null
    },
    general: {
      pauseOnHover: null,
      autoplayRespectsPrefersReducedMotion: null,
      colorContrast: null
    }
  });
  // State for notes
  const [notes, setNotes] = useState("");

  /**
   * Update test result for a specific test
   */
  const updateTestResult = (category, test, result) => {
    setTestResults(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [test]: result
      }
    }));
  };

  /**
   * Get result icon based on test result
   */
  const getResultIcon = (result) => {
    if (result === null) return '❓'; // Not tested
    if (result === true) return '✅'; // Pass
    if (result === false) return '❌'; // Fail
    return '⚠️'; // Partial/Issues
  };

  /**
   * Get result class for styling
   */
  const getResultClass = (result) => {
    if (result === null) return 'not-tested';
    if (result === true) return 'pass';
    if (result === false) return 'fail';
    return 'partial';
  };

  return (
    <div className="accessibility-tester">
      <h2>Accessibility Testing Results</h2>
      <p>Use this section to document your accessibility testing findings.</p>

      {/* Keyboard Navigation Tests */}
      <div className="test-category">
        <h3>🎹 Keyboard Navigation</h3>
        <div className="test-grid">
          <div className="test-item">
            <label>
              <strong>Tab Navigation:</strong> Can you tab through all interactive elements?
            </label>
            <div className="test-controls">
              <button 
                className={`test-btn ${getResultClass(testResults.keyboard.tabNavigation)}`}
                onClick={() => updateTestResult('keyboard', 'tabNavigation', true)}
              >
                ✅ Pass
              </button>
              <button 
                className={`test-btn ${getResultClass(testResults.keyboard.tabNavigation)}`}
                onClick={() => updateTestResult('keyboard', 'tabNavigation', false)}
              >
                ❌ Fail
              </button>
              <button 
                className={`test-btn ${getResultClass(testResults.keyboard.tabNavigation)}`}
                onClick={() => updateTestResult('keyboard', 'tabNavigation', 'partial')}
              >
                ⚠️ Issues
              </button>
            </div>
            <span className="result-indicator">
              {getResultIcon(testResults.keyboard.tabNavigation)}
            </span>
          </div>

          <div className="test-item">
            <label>
              <strong>Enter/Space Activation:</strong> Do buttons activate with Enter/Space?
            </label>
            <div className="test-controls">
              <button onClick={() => updateTestResult('keyboard', 'enterActivation', true)}>✅ Pass</button>
              <button onClick={() => updateTestResult('keyboard', 'enterActivation', false)}>❌ Fail</button>
              <button onClick={() => updateTestResult('keyboard', 'enterActivation', 'partial')}>⚠️ Issues</button>
            </div>
            <span className="result-indicator">
              {getResultIcon(testResults.keyboard.enterActivation)}
            </span>
          </div>

          <div className="test-item">
            <label>
              <strong>Arrow Keys:</strong> Do left/right arrows navigate slides?
            </label>
            <div className="test-controls">
              <button onClick={() => updateTestResult('keyboard', 'arrowKeys', true)}>✅ Pass</button>
              <button onClick={() => updateTestResult('keyboard', 'arrowKeys', false)}>❌ Fail</button>
              <button onClick={() => updateTestResult('keyboard', 'arrowKeys', 'partial')}>⚠️ Issues</button>
            </div>
            <span className="result-indicator">
              {getResultIcon(testResults.keyboard.arrowKeys)}
            </span>
          </div>
        </div>
      </div>

      {/* Screen Reader Tests */}
      <div className="test-category">
        <h3>🔊 Screen Reader (NVDA/VoiceOver)</h3>
        <div className="test-grid">
          <div className="test-item">
            <label>
              <strong>Slide Announcements:</strong> Are slide changes announced?
            </label>
            <div className="test-controls">
              <button onClick={() => updateTestResult('screenReader', 'slideAnnouncements', true)}>✅ Pass</button>
              <button onClick={() => updateTestResult('screenReader', 'slideAnnouncements', false)}>❌ Fail</button>
              <button onClick={() => updateTestResult('screenReader', 'slideAnnouncements', 'partial')}>⚠️ Issues</button>
            </div>
            <span className="result-indicator">
              {getResultIcon(testResults.screenReader.slideAnnouncements)}
            </span>
          </div>

          <div className="test-item">
            <label>
              <strong>Button Labels:</strong> Are button purposes clearly announced?
            </label>
            <div className="test-controls">
              <button onClick={() => updateTestResult('screenReader', 'buttonLabels', true)}>✅ Pass</button>
              <button onClick={() => updateTestResult('screenReader', 'buttonLabels', false)}>❌ Fail</button>
              <button onClick={() => updateTestResult('screenReader', 'buttonLabels', 'partial')}>⚠️ Issues</button>
            </div>
            <span className="result-indicator">
              {getResultIcon(testResults.screenReader.buttonLabels)}
            </span>
          </div>

          <div className="test-item">
            <label>
              <strong>Current Slide Info:</strong> Is current slide position announced?
            </label>
            <div className="test-controls">
              <button onClick={() => updateTestResult('screenReader', 'currentSlideInfo', true)}>✅ Pass</button>
              <button onClick={() => updateTestResult('screenReader', 'currentSlideInfo', false)}>❌ Fail</button>
              <button onClick={() => updateTestResult('screenReader', 'currentSlideInfo', 'partial')}>⚠️ Issues</button>
            </div>
            <span className="result-indicator">
              {getResultIcon(testResults.screenReader.currentSlideInfo)}
            </span>
          </div>
        </div>
      </div>

      {/* Focus Management Tests */}
      <div className="test-category">
        <h3>🎯 Focus Management</h3>
        <div className="test-grid">
          <div className="test-item">
            <label>
              <strong>Visible Focus Indicators:</strong> Are focus states clearly visible?
            </label>
            <div className="test-controls">
              <button onClick={() => updateTestResult('focus', 'visibleFocusIndicators', true)}>✅ Pass</button>
              <button onClick={() => updateTestResult('focus', 'visibleFocusIndicators', false)}>❌ Fail</button>
              <button onClick={() => updateTestResult('focus', 'visibleFocusIndicators', 'partial')}>⚠️ Issues</button>
            </div>
            <span className="result-indicator">
              {getResultIcon(testResults.focus.visibleFocusIndicators)}
            </span>
          </div>

          <div className="test-item">
            <label>
              <strong>Logical Focus Order:</strong> Does focus move in logical sequence?
            </label>
            <div className="test-controls">
              <button onClick={() => updateTestResult('focus', 'logicalFocusOrder', true)}>✅ Pass</button>
              <button onClick={() => updateTestResult('focus', 'logicalFocusOrder', false)}>❌ Fail</button>
              <button onClick={() => updateTestResult('focus', 'logicalFocusOrder', 'partial')}>⚠️ Issues</button>
            </div>
            <span className="result-indicator">
              {getResultIcon(testResults.focus.logicalFocusOrder)}
            </span>
          </div>
        </div>
      </div>

      {/* General Accessibility Tests */}
      <div className="test-category">
        <h3>🌐 General Accessibility</h3>
        <div className="test-grid">
          <div className="test-item">
            <label>
              <strong>Pause on Hover:</strong> Does carousel pause when hovered?
            </label>
            <div className="test-controls">
              <button onClick={() => updateTestResult('general', 'pauseOnHover', true)}>✅ Pass</button>
              <button onClick={() => updateTestResult('general', 'pauseOnHover', false)}>❌ Fail</button>
              <button onClick={() => updateTestResult('general', 'pauseOnHover', 'partial')}>⚠️ Issues</button>
            </div>
            <span className="result-indicator">
              {getResultIcon(testResults.general.pauseOnHover)}
            </span>
          </div>

          <div className="test-item">
            <label>
              <strong>Reduced Motion Respect:</strong> Does it respect prefers-reduced-motion?
            </label>
            <div className="test-controls">
              <button onClick={() => updateTestResult('general', 'autoplayRespectsPrefersReducedMotion', true)}>✅ Pass</button>
              <button onClick={() => updateTestResult('general', 'autoplayRespectsPrefersReducedMotion', false)}>❌ Fail</button>
              <button onClick={() => updateTestResult('general', 'autoplayRespectsPrefersReducedMotion', 'partial')}>⚠️ Issues</button>
            </div>
            <span className="result-indicator">
              {getResultIcon(testResults.general.autoplayRespectsPrefersReducedMotion)}
            </span>
          </div>
        </div>
      </div>

      {/* Notes Section */}
      <div className="notes-section">
        <h3>📝 Testing Notes</h3>
        <textarea
          placeholder={`Add your detailed observations here...\n\nFor example:\n- What specifically worked or didn't work?\n- How did the screen reader announce elements?\n- Were there any confusing or unexpected behaviors?\n- How does this compare to the reference accessible carousel?\n- What improvements would you suggest?`}
          rows="8"
          className="notes-textarea"
          value={notes}
          onChange={e => setNotes(e.target.value)}
        />
        <div className="notes-preview">
          <strong>Saved Notes:</strong>
          <pre>{notes}</pre>
        </div>
      </div>

      {/* Instructions & Results Summary Side by Side */}
      <div className="instructions-summary-container">
        <div className="instructions">
          <h3>🔍 Testing Instructions</h3>
          <div className="concise-instructions" style={{marginBottom: '16px', background: '#e3f2fd', padding: '12px', borderRadius: '6px'}}>
            <strong>Quick Guide:</strong>
            <ul style={{margin: '8px 0 0 16px'}}>
              <li><strong>Keyboard Testing:</strong> Use Tab, Enter, and Arrow keys to navigate</li>
              <li><strong>Screen Reader Testing:</strong> Use NVDA (Windows) or VoiceOver (Mac)</li>
              <li><strong>Focus Testing:</strong> Notice which elements receive focus indicators</li>
            </ul>
          </div>
          <div className="instruction-grid">
            <div className="instruction-item">
              <h4>Keyboard Testing:</h4>
              <ul>
                <li>Use <kbd>Tab</kbd> to navigate through elements</li>
                <li>Use <kbd>Enter</kbd> or <kbd>Space</kbd> to activate buttons</li>
                <li>Try <kbd>Arrow Left</kbd> and <kbd>Arrow Right</kbd> keys</li>
                <li>Test <kbd>Escape</kbd> key behavior</li>
              </ul>
            </div>
            <div className="instruction-item">
              <h4>Screen Reader Testing:</h4>
              <ul>
                <li><strong>Windows:</strong> Download NVDA (free)</li>
                <li><strong>Mac:</strong> Enable VoiceOver (Cmd+F5)</li>
                <li>Navigate with Tab and listen to announcements</li>
                <li>Test slide changes and button activations</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="results-summary">
          <h3>📊 Accessibility Test Results Summary</h3>
          <div className="summary-category">
            <h4>Keyboard Navigation</h4>
            <ul>
              <li>Tab Navigation: {getResultIcon(testResults.keyboard.tabNavigation)}</li>
              <li>Enter/Space Activation: {getResultIcon(testResults.keyboard.enterActivation)}</li>
              <li>Arrow Keys: {getResultIcon(testResults.keyboard.arrowKeys)}</li>
              <li>Escape Key: {getResultIcon(testResults.keyboard.escapeKey)}</li>
            </ul>
          </div>
          <div className="summary-category">
            <h4>Screen Reader</h4>
            <ul>
              <li>Slide Announcements: {getResultIcon(testResults.screenReader.slideAnnouncements)}</li>
              <li>Button Labels: {getResultIcon(testResults.screenReader.buttonLabels)}</li>
              <li>Current Slide Info: {getResultIcon(testResults.screenReader.currentSlideInfo)}</li>
              <li>Navigation Instructions: {getResultIcon(testResults.screenReader.navigationInstructions)}</li>
            </ul>
          </div>
          <div className="summary-category">
            <h4>Focus Management</h4>
            <ul>
              <li>Visible Focus Indicators: {getResultIcon(testResults.focus.visibleFocusIndicators)}</li>
              <li>Logical Focus Order: {getResultIcon(testResults.focus.logicalFocusOrder)}</li>
              <li>Focus Trapping: {getResultIcon(testResults.focus.focusTrapping)}</li>
            </ul>
          </div>
          <div className="summary-category">
            <h4>General Accessibility</h4>
            <ul>
              <li>Pause on Hover: {getResultIcon(testResults.general.pauseOnHover)}</li>
              <li>Reduced Motion Respect: {getResultIcon(testResults.general.autoplayRespectsPrefersReducedMotion)}</li>
              <li>Color Contrast: {getResultIcon(testResults.general.colorContrast)}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityTester;