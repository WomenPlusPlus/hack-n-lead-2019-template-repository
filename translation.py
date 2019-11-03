#https://py-googletrans.readthedocs.io/en/latest/

from googletrans import Translator
import json
import os

translator = Translator()

def fullfile(filename):
    return os.path.join(os.path.dirname(__file__),filename)

def loadQuestion(folder, filename):
    with open(fullfile(os.path.join(folder, filename)), encoding = 'utf-8') as f:
        return json.load(f)

def translate(data, language):
    '''translate the text into required language'''
    return translator.translate(data, dest = language)    

def createAssess(translated_indicator, translated_questions, language):
    return {
                "indicator": translated_indicator.text,
                "question": [question.text for question in translated_questions]
            }

def createFinalDict(assessment, language):
    return [
        {
            "language": language,
            "assessment": assessment

        }
    ]

def saveFile(data, language, folder):
    filename = 'qna_' + str(language) + '.json'
    with open(fullfile(os.path.join(folder, filename)), 'w') as outfile:
        json.dump(data, outfile)

def run():
    data = loadQuestion('Questions','qna.json')
    assess_lst = []
    language = 'de'
    for row in data[0]['assessment']:
        translated_indicator = translate(row['indicator'], language)
        translated_questions = [translate(r, language) for r in row['question']]
        assess_lst.append(createAssess(translated_indicator, translated_questions, language))
        final_data = createFinalDict(assess_lst, language)
    saveFile(final_data, language, 'Questions')

if __name__ == "__main__":
    run()